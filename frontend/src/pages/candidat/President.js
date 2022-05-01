import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VoteState } from "../../context/VoteContext";

const President = () => {

    const { id } = useParams();
    const { eleve } = VoteState();
    const [count, setCount] = useState('');
    const [president, setPresident] = useState('');

    const voter = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:80/react-codeigniter-Vote/modifierPresident/${eleve.num_inscription}`, {'id_president':id} );

        window.location.href=`/president/${id}`;
    }
    
    useEffect(() => {
        (async function afficheCompte(){
            const { data } = await axios.get(`http://localhost:80/react-codeigniter-Vote/showCount/${id}`);
            setCount(data);
        })();
    },[id]);

    useEffect(() => {
        (async function afficheCompte(){
            const { data } = await axios.get(`http://localhost:80/react-codeigniter-Vote/afficher_un_president/${id}`);
            setPresident(data);
        })();
    },[id]);

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
                <p className="diplay-6">Bonjour, je m'appelle <span style={{color: "crimson"}}>{president && president.nom}</span>, </p>
                <small className="lead">je suis un etudiant en M2 de parcours DA2I, Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                
                <button className="btn btn-secondary my-4" onClick={voter}>VOTER POUR MOI</button>
                <p className="lead">nombre de vote: <span className="text-danger fw-bold">{count.nom}</span></p>
            </div>
            <div className="col-md-6">
                <img src="/vote.png" alt="sary" className="img-fluid" width="70%" height="70%"/>
            </div>            
        </motion.section>
    )
}

export default President;