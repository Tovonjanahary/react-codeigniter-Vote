import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Accueil = () => {

    const variants = {
        visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2 }
        },
        hidden: {
            opacity: 0.1
        }
    };

    return (
        <motion.section className="container mt-5"
        variants={variants}
        initial="hidden"
        animate="visible"
        >
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 text-center text-md-start">
                    <h1>
                        <div className="display-6">Voting system</div>
                        <small className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                    </h1>
                    <button className="btn-authentification border lead rounded text-light py-2 px-3 "><Link to="/vote">VOTEZ VOTRE CANDIDAT</Link></button>
                </div>
                <div className="col-md-8">
                    <img src="/election-illustration.png" alt="jumbotron" className="img-fluid d-none d-md-block" />
                </div>
            </div>
        </motion.section>
    )
}

export default Accueil;