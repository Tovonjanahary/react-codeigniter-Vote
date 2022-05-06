import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../fetchData/useFetch";

const Profile = () => {

    const { id } = useParams();

    const { data } = useFetch(`http://localhost:80/react-codeigniter-Vote/afficher_simple_eleve/${id}`);

    return(
        <div>
            {
                data && (
                    <div className="container">
                        <p>{data.num_inscription}</p>
                        <p>{data.nom}</p>
                        <p>{data.date_naissance}</p>
                        <p>{data.adresse}</p>
                        <p>{data.email}</p>
                        <p>{data.num_telephone}</p>
                        <img src={data.photo} alt="img_avatar" width="20%" heigth="20%"></img>
                    </div> 
                )
            }
        </div>
    )
}

export default Profile;