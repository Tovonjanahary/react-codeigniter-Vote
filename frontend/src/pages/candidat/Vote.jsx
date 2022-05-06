import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { VoteState } from "../../context/VoteContext";
import { motion } from "framer-motion";
import useFetch from "../../fetchData/useFetch";

const Vote = () => {
    const { eleve } = VoteState();
    const history = useHistory();

    useEffect(() => {
        if(!eleve) {
            history.push("/connexion");
            // window.location.href= "/connexion";
        }
    },[history,eleve]);

    const { data, loading } = useFetch("http://localhost:80/react-codeigniter-Vote/afficherCandidat");
    
    const variants = {
        visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 }
        },
        hidden: {
            opacity: 0
        }
    };

    return (
        <>
            <h1 className="h4 mt-5 lead text-center">LISTE DES CANDIDATS</h1>
            <section className="votePage">
            <div>{ loading && <p className="loading display-6">loading...</p>}</div>
            <motion.div className="row p-4 m-5"
            variants={variants}
            initial="hidden"
            animate="visible"
            >
                {
                    data && data.map(p => (
                        <div className="border rounded col-md-4 m-3 p-2" key={p.id_president}>
                            <p>Candidat numero : <span className="text-danger">{p.id_president}</span></p>
                            <p>{p.nom} {p.prenom}</p>
                            <img src="img_avatar.png" alt="img_avatar" width="20%" heigth="20%" style={{float: "right"}}></img>
                            <small>Email: {p.email}</small><br/>
                            <Link className="btn btn-secondary lead mt-2" to={`/president/${p.id_president}`}>consulter</Link>
                        </div>
                        ))
                }
            </motion.div>
            </section>
        </>
    )
}

export default Vote;