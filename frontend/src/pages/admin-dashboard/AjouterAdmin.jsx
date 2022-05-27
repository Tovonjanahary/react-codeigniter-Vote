import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";

const AjouterAdmin = () => {

  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [date_naissance, setdate_naissance] = useState("");
  const [adresse, setadresse] = useState("");
  const [CIN, setCIN] = useState("");
  const [num_telephone, setnum_telephone] = useState("");
  const isAdmin = true;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:80/react-codeigniter-Vote/creerAdmin", { nom, prenom, email, password, date_naissance, adresse, CIN, num_telephone, isAdmin });
      if (data.data.status !== 201) {
        setError(data.data.message.error);
      } else {
        setSuccess(data.data.messages.success);
      }
      setnom("");
      setprenom("");
      setCIN("");
      setadresse("");
      setEmail("");
      setdate_naissance("");
      setpassword("");
      setnum_telephone("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row container my-5 align-items-center justify-content-center">
      <section className="col-lg-6">
        <div className="shadow p-5">
          <form className="row form-authentification" encType="multipart/form-data" onSubmit={handleSubmit}>
            <small className="text-center text-danger lead my-2">Ajouter un administrateur</small>
            {error && <p className="alert alert-danger text-center">{error}</p>}
            {success && <p className="alert alert-success text-center">{success}</p>}
            <section className="col-6">
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" onChange={(e) => setnom(e.target.value)} className="form-control" value={nom} />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">prenom</label>
                <input type="text" name="prenom" onChange={(e) => setprenom(e.target.value)} className="form-control" value={prenom} />
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" value={email} />
              </div>
              <div className="form-group">
                <label htmlFor="password">mot de passe</label>
                <input type="password" name="password" onChange={(e) => setpassword(e.target.value)} className="form-control" value={password} />
              </div>
              <div className="form-group">
                <label htmlFor="date_naissance">date_naissance</label>
                <input type="date" name="date_naissance" onChange={(e) => setdate_naissance(e.target.value)} className="form-control" value={date_naissance} />
              </div>
            </section>
            <section className="col-6">
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
            </section>
            <Button type="submit" className="btn btn-secondary">Ajouter</Button>
          </form>
        </div>
      </section>
      <div className="col-lg-5">
        <img src="vote_3.jpg" className="img-fluid d-none d-md-block ms-5" alt="admin" />
      </div>
    </div>
  )
}

export default AjouterAdmin;