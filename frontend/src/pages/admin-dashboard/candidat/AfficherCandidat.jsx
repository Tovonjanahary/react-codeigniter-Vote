import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from '../../../fetchData/useFetch';


const AfficherCandidat = () => {

  const getCandidat = async () => {
    await axios.get("http://localhost:80/react-codeigniter-Vote/afficherCandidat");
  }

  const { data } = useFetch("http://localhost:80/react-codeigniter-Vote/afficherCandidat");

  const SupprimerPresident = async (id) => {
    await axios.delete(`http://localhost:80/react-codeigniter-Vote/supprimerPresident/${id}`);
    getCandidat();
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
        {data && data.map((p) => (
          <tr key={p.id_president}>
            <td>{p.id_president}</td>
            <td>{p.nom} {p.prenom}</td>
            <td>
              <button className='p-1 Action_president border rounded'><Link to={`/modifierPresident/${p.id_president}`}>Modifier</Link></button>
              <button className='p-1 ms-2 Action_president supprimer border rounded' onClick={() => SupprimerPresident(p.id_president)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AfficherCandidat