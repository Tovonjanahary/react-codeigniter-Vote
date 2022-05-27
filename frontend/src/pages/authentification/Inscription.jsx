import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

const Inscription = () => {

  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [date_naissance, setdate_naissance] = useState("");
  const [adresse, setadresse] = useState("");
  const [CIN, setCIN] = useState("");
  const [num_telephone, setnum_telephone] = useState("");
  const [photo, setPhoto] = useState();

  const [error, setError] = useState("");

  const history = useHistory();

  const postPics = (photo) => {
    if (photo === undefined) {
      console.log("undefined");
      return;
    }
    if (photo.type === "image/jpeg" || photo.type === "image/png" || photo.type === "image/jpg") {
      const data = new FormData();
      data.append("file", photo);
      data.append("upload_preset", "fac_vote");
      data.append("cloud_name", "tenzo");
      fetch("https://api.cloudinary.com/v1_1/tenzo/image/upload", {
        method: 'post',
        body: data
      })
        .then((res) => res.json())
        .then((data) => {
          setPhoto(data.url.toString());
          console.log(data.url.toString());
        })

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:80/react-codeigniter-Vote/creerEleve", { nom, prenom, date_naissance, adresse, CIN, num_telephone, photo });
      if (data.data.status !== 201) {
        setError(data.data.message.error);
        console.log(data);
      } else {
        history.push(`/signup/${data.data.data}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0.1
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.2 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
  };

  return (
    <motion.div className="row container my-5 align-items-center justify-content-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="col-lg-7">
        <div className="shadow p-5" onSubmit={handleSubmit}>
          <p className="lead">Inscription :)</p>
          {error && <p className="alert alert-danger text-center">{error}</p>}
          <form className="form-authentification" encType="multipart/form-data">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="nom">Nom</label>
                  <input type="text" name="nom" onChange={(e) => setnom(e.target.value)} className="form-control" value={nom} />
                </div>
                <div className="form-group">
                  <label htmlFor="prenom">prenom</label>
                  <input type="text" name="prenom" onChange={(e) => setprenom(e.target.value)} className="form-control" value={prenom} />
                </div>
                <div className="form-group">
                  <label htmlFor="date_naissance">date_naissance</label>
                  <input type="text" name="date_naissance" onChange={(e) => setdate_naissance(e.target.value)} className="form-control" value={date_naissance} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="adresse">adresse</label>
                  <input type="text" name="adresse" onChange={(e) => setadresse(e.target.value)} className="form-control" value={adresse} />
                </div>
                <div className="form-group">
                  <label htmlFor="CIN">CIN</label>
                  <input type="number" name="CIN" onChange={(e) => setCIN(e.target.value)} className="form-control" value={CIN} />
                </div>
                <div className="form-group">
                  <label htmlFor="num_telephone">numero de telephone</label>
                  <input type="number" name="num_telephone" onChange={(e) => setnum_telephone(e.target.value)} className="form-control my-2" value={num_telephone} />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="photo">votre photo</label>
              <input type="file" name="photo" onChange={(e) => postPics(e.target.files[0])} className="form-control my-2" />
            </div>
            <Button type="submit" className="btn btn-secondary">suivant..</Button>
          </form>
          <small>vous avez deja un compte ? <span><Link className="text-danger" to="/connexion">Se connecter</Link> </span>maintenant</small>
        </div>
      </section>
      <div className="col-lg-5">
        <img src="adminDashboard/vote_3.jpg" className="img-fluid d-none d-md-block ms-5" alt="signin" />
      </div>
    </motion.div>

  )
}

export default Inscription;