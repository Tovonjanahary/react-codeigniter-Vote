import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const CreerCandidat = () => {

    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    const [error, setError] = useState("");

    const getPresident = async () => {
        await axios.get("http://localhost:80/react-codeigniter-Vote/afficherCandidat");
    }

    useEffect(() => {
      getPresident();
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:80/react-codeigniter-Vote/ajouterCandidat", {nom, prenom, email, telephone});
            if(data.status !== 201){
                setError(data.message.error);
                getPresident();
            } else {
            // history.push(`/signup/${data.data.data}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="container col-lg-5 shadow p-5">
        <p className="lead text-center">Ajouter un candidat</p>
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
                <Button type="submit" className="btn btn-secondary">Ajouter</Button>
            </form>
        </div>
    </div>
  )
}

export default CreerCandidat