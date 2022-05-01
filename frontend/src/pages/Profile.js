import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Profile = () => {

    const { id } = useParams();
    const[eleve, setEleve] = useState("");

    useEffect(() => {
        (async function getEleve() {
            const {data} = await axios.get(`http://localhost:80/react-codeigniter-Vote/afficher_simple_eleve/${id}`);
            console.log(data);
            setEleve(data);
        })();

    },[id]);

    return(
        <div>
            {
                eleve && (
                    <div className="container">
                        <p>{eleve.num_inscription}</p>
                        <p>{eleve.nom}</p>
                        <p>{eleve.date_naissance}</p>
                        <p>{eleve.adresse}</p>
                        <p>{eleve.email}</p>
                        <p>{eleve.num_telephone}</p>
                        <img src={eleve.photo} alt="img_avatar" width="20%" heigth="20%"></img>
                    </div> 
                )
            }
        </div>
    )
}

export default Profile;