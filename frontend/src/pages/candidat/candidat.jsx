import axios from "axios";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { VoteState } from "../../context/VoteContext";
import useFetch from "../../fetchData/useFetch";

const President = () => {

  const { id } = useParams();
  const { eleve } = VoteState();
  const history = useHistory();

  useEffect(() => {
    const eleveConnectee = JSON.parse(localStorage.getItem('login'));
    if (!eleveConnectee) {
      history.push("/connexion");
    }
  }, [history]);
  const voter = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:80/react-codeigniter-Vote/modifierPresident/${eleve.num_inscription}`, { 'id_president': id });
    window.location.href = `/president/${id}`;
  }

  const count = useFetch(`http://localhost:80/react-codeigniter-Vote/showCount/${id}`);

  const { data } = useFetch(`http://localhost:80/react-codeigniter-Vote/afficher_un_president/${id}`);
  const res = useFetch(`http://localhost:80/react-codeigniter-Vote/afficher_simple_eleve/${eleve.num_inscription}`);

  const condition = (id === res.data.id_president);

  const variants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.2 }
    },
    hidden: {
      opacity: 0
    }
  };

  return (
    <motion.section className="row container justify-content-center align-items-start py-5"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <div className="col-md-6">
        <p className="diplay-6">Bonjour, je m'appelle <span style={{ color: "crimson" }}>{data && data.nom}</span>, </p>
        <small className="lead">je suis un etudiant en M2 de parcours DA2I, Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        {
          condition ? <div className="alert alert-success">merci d'avoir voter pour moi !!<span>&#128525;</span> <span>&#128525;</span></div> :
            <button className="btn btn-secondary my-4" onClick={voter}>VOTER POUR MOI <span>&#128578;</span></button>
        }
        {/* <button className="btn btn-secondary my-4" onClick={voter}>VOTER POUR MOI</button>           */}
        <p className="lead">nombre de vote: <span className="count">{count.data.nom}</span></p>
      </div>
      <div className="col-md-6">
        <img src="/vote.png" alt="sary" className="img-fluid" width="70%" height="70%" />
      </div>
    </motion.section>
  )
}

export default President;