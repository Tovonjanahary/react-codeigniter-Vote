import React from 'react'
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

const Authentification = () => {
  return (
    <div className="">
      <button className="btn-authentification border lead rounded text-light py-1 px-2"><Link to="/connexion">Se connecter</Link></button>
      <button className="btn-authentification border lead rounded text-light py-1 px-2"><Link to="/inscription">S'inscrire</Link></button>
    </div>
  )
};

const Admin = () => {
  const eleveConnectee = JSON.parse(localStorage.getItem('login'));
  useEffect(() => {
  }, [eleveConnectee]);

  return (
    <li className="nav-item lead">
      <Link to="/adminDashboard" className="nav-link">
        {
          !eleveConnectee || (eleveConnectee && eleveConnectee.isAdmin) !== "1" ? "" : "Administration"
        }
      </Link>
    </li>
  )
}

const Header = () => {

  const eleveConnectee = JSON.parse(localStorage.getItem('login'));
  useEffect(() => {
  }, [eleveConnectee]);

  const history = useHistory();
  const id = eleveConnectee && eleveConnectee.num_inscription;
  let Links = Scroll.Link;

  const deconnexion = () => {
    localStorage.removeItem("login");
    history.push("/");
  }

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light py-3 sticky-top'>
      <div className="container">
        <div className="collapse navbar-collapse justify-content-start align-center" id='main-nav'>
          <ul className="navbar-nav">
            <li className="nav-item lead">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item lead">
              <Links
                to="guide"
                spy={true}
                offset={-50} duration={500}
                className="nav-link guides">
                Guide
              </Links>
            </li>
            <Admin />

          </ul>
        </div>
        <div className="authentification">
          {
            !eleveConnectee ? <Authentification /> :
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