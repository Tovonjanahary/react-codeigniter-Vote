import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const AjouterAdmin = () => {

    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [date_naissance, setdate_naissance] = useState("");
    const [adresse, setadresse] = useState("");
    const [CIN, setCIN] = useState("");
    const [num_telephone, setnum_telephone] = useState("");

    const [error, setError] = useState("");

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:80/systeme_de_vote/backend/creerEleve", {nom, prenom, date_naissance, adresse, CIN, num_telephone});
            if(data.data.status !== 201){
                setError(data.data.message.error);
                console.log(data);
            } else {
            history.push(`/signup/${data.data.data}`);
            }
            console.log({nom, prenom, date_naissance, adresse, CIN, num_telephone});
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
                    { error && <p className="text-danger text-center">{error}</p>}
                        <section className="col-6">
                            <div className= "form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" name="nom" onChange={(e) => setnom(e.target.value)} className="form-control" value={nom}/>
                            </div>
                            <div className= "form-group">
                                <label htmlFor="prenom">prenom</label>
                                <input type="text" name="prenom" onChange={(e) => setprenom(e.target.value)} className="form-control" value={prenom}/>
                            </div>
                            <div className= "form-group">
                                <label htmlFor="date_naissance">date_naissance</label>
                                <input type="text" name="date_naissance" onChange={(e) => setdate_naissance(e.target.value)} className="form-control" value={date_naissance}/>
                            </div>
                        </section>
                        <section className="col-6">
                            <div className= "form-group">
                                <label htmlFor="adresse">adresse</label>
                                <input type="text" name="adresse" onChange={(e) => setadresse(e.target.value)} className="form-control" value={adresse}/>
                            </div>
                            <div className= "form-group">
                                <label htmlFor="CIN">CIN</label>
                                <input type="number" name="CIN" onChange={(e) => setCIN(e.target.value)} className="form-control" value={CIN}/>
                            </div>
                            <div className= "form-group">
                                <label htmlFor="num_telephone">numero de telephone</label>
                                <input type="number" name="num_telephone" onChange={(e) => setnum_telephone(e.target.value)} className="form-control my-2" value={num_telephone}/>
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