import { motion } from "framer-motion";
import AfficherCandidat from "./AfficherCandidat";
import CreerCandidat from "./CreerCandidat";

const Candidat = () => {

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
    <motion.section className="row mt-4"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <CreerCandidat />
      <div className="col-sm-6">
        <p className="lead text-center">liste des candidats</p>
        <AfficherCandidat />
      </div>
    </motion.section>
  )
}

export default Candidat;