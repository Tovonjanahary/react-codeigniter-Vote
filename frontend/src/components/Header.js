import React from 'react'
import { Link } from "react-router-dom";
import { VoteState } from "../context/VoteContext";

const Authentification = () => {
    return(
        <div className="">
          <button className="btn-authentification border lead rounded text-light py-1 px-2"><Link to="/connexion">Se connecter</Link></button>
          <button className="btn-authentification border lead rounded text-light py-1 px-2"><Link to="/inscription">S'inscrire</Link></button>
        </div>
    )
};

const Admin = () => {

    const { eleve } = VoteState();
    
    return (
        <li className="nav-item lead">
            <Link to="/candidat" href="#topics" className="nav-link">
            {
                eleve.isAdmin !== "1" || eleve === false ? "" : "Administration"
            }
            </Link>
        </li>
    )
}


const Header = () => {

    const { eleve } = VoteState();
    // const history = useHistory();
    const id = eleve.num_inscription;

    const deconnexion = async () => {
        await localStorage.removeItem("premierLogin");
        // history.push("/connexion");
        window.location.href="/connexion";
    }

    // const profile = async () => {
    //     const data = await axios.get(`http://localhost:80/fac_vote/afficher_simple_eleve/${id}`)
    // }

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light py-3'>
      <div className="container">
        <div className="collapse navbar-collapse justify-content-start align-center" id='main-nav'>
          <ul className="navbar-nav">
            <li className="nav-item lead">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item lead">
              <Link to="/guide" className="nav-link">Guide</Link>
            </li>
            <li className="nav-item lead">
              <Link to="apropos" className="nav-link"> propos</Link>
            </li>
            <Admin eleve={eleve}/>

          </ul>
        </div>
        <div className="authentification">
        {
            Object.keys(eleve).length === 0 ? <Authentification /> :
            <div className="authentification d-flex">
                <button className="btn-authentification border lead rounded text-light py-1 px-2" onClick={deconnexion}>Se deconnecter</button>
                <button className="btn-authentification border lead rounded py-1 px-2"><Link to={`/profile/${id}`} >profile</Link></button>
            </div>
        }
                 </div>
        <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#main-nav' aria-controls='main-nav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default Header