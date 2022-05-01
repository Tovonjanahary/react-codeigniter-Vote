import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const AfficherCandidat = () => {

    const [president, setPresident] = useState();

    const getPresident = async () => {
        const { data } = await axios.get("http://localhost:80/react-codeigniter-Vote/afficherCandidat");
        setPresident(data);
    }

    useEffect(() => {
      getPresident();

    });

    const SupprimerPresident =  async (id) => {
        const res = await axios.delete(`http://localhost:80/react-codeigniter-Vote/supprimerPresident/${id}`);
        console.log(res);
        getPresident();
    };

  return (
    <table>
        <thead>
            <tr>
                <th>Numero</th>
                <th>Nom</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { president && president.map((p) => (
                <tr key={p.id_president}>
                    <td>{p.id_president}</td>
                    <td>{p.nom} {p.prenom}</td>
                    <td>
                        <button className='p-1 Action_president border rounded'><Link to={`/modifierPresident/${p.id_president}`}>Modifier</Link></button>
                        <button className='p-1 ms-2 Action_president supprimer border rounded' onClick={() =>SupprimerPresident(p.id_president)}>Supprimer</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default AfficherCandidat