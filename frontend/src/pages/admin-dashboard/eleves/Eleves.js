import axios from "axios";
import { useEffect, useState } from "react";

const Eleves = () => {

    const [eleve, setEleve] = useState(false);

    const getData = async () => {
        const { data } = await axios.get("http://localhost:80/react-codeigniter-Vote/eleves");
        setEleve(data);
    }

    useEffect(() => {
        getData();
    });

    const SupprimerEleve =  async (id) => {
        const res = await axios.delete(`http://localhost:80/react-codeigniter-Vote/supprimerEleve/${id}`);
        console.log(res);
        getData();
    };


    // const afficheCompte = (id) => {
    //     const { data } = await axios.get(`http://localhost:80/fac_vote/showCount/${id}`);
    // }

    // useEffect(() => {
    //     afficheCompte();
    // });

    return (
        <div className="mt-4">
            <div className="form-group mb-4">
                <input type="text" className="form-control" placeholder="rechercher ici..."/>
            </div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Date de naissance</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Parcours</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            eleve && eleve.map(e => (
                            <tr key={e.num_inscription}>
                                <td>{e.num_inscription}</td>
                                <td>{e.nom}</td>
                                <td>{e.prenom}</td>
                                <td>{e.date_naissance}</td>
                                <td>{e.email}</td>
                                <td>{e.num_telephone}</td>
                                <td>DA2I</td>
                                <td>
                                    <button className='p-1 ms-2 Action_president supprimer border rounded' onClick={() =>SupprimerEleve(e.num_inscription)}>Supprimer</button>
                                </td>
                            </tr>
                            ))
                        }
                    
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Eleves;