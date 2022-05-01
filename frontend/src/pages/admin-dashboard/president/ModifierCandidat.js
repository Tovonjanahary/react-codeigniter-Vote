import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios";
import { Button } from "react-bootstrap";

const ModifierCandidat = () => {

    const { id } = useParams();

    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.patch(`http://localhost:80/react-codeigniter-Vote/modifier_president/${id}`,{ nom, prenom, email, telephone });
            if(data.data.status !== 201){
                setError(data.data.message.error);
                console.log(data);
            } else {
                window.location.href="/candidat";
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async function getCandidat(){
            const { data } = await axios.get(`http://localhost:80/react-codeigniter-Vote/afficher_un_president/${id}`);
            setnom(data.nom);
            setprenom(data.prenom);
            setEmail(data.email);
            setTelephone(data.telephone);
        }())       
    },[id]);

  return (
    <div className="container my-4">
        <p className="lead text-center">Modifier un candidat</p>
        { error && <p className="text-danger text-center">{error}</p>}
        <div className="ps-5">
            <form className="form-authentification"onSubmit={handleSubmit} encType="multipart/form-data">
                <div className= "form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" onChange={(e) => setnom(e.target.value)} className="form-control" value={nom}/>
                </div>
                <div className= "form-group">
                    <label htmlFor="prenom">prenom</label>
                    <input type="text" name="prenom" onChange={(e) => setprenom(e.target.value)} className="form-control" value={prenom}/>
                </div>
                <div className= "form-group">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" value={email}/>
                </div>
                <div className= "form-group">
                    <label htmlFor="num_telephone">numero de telephone</label>
                    <input type="number" name="telephone" onChange={(e) => setTelephone(e.target.value)} className="form-control my-2" value={telephone}/>
                </div>
                <Button type="submit" className="btn btn-secondary">Modifier</Button>
            </form>
        </div>  
    </div>
  )
}

export default ModifierCandidat