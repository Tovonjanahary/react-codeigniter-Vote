import React from 'react';
import { BsLinkedin, BsMessenger, BsPersonCircle, BsTelephoneInboundFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Sidebar = () => {
    const{ url } = useRouteMatch();
    console.log(url)
  return (
        <>
            <p className="fw-bold mt-4 p-2 admin-title">Admnistration</p>
            <ul className="list-gestion list-unstyled">
                <li className="list-gestion-content b-active"><BsTelephoneInboundFill className="me-2"/><Link to={`${url}`}className="">Candidat</Link></li>
                <li className="list-gestion-content"><BsMessenger className="me-2"/><Link to={`${url}/eleves`}>Eleves</Link></li>
                <li className="list-gestion-content"><BsPersonCircle className="me-2"/><Link to="/ajouterAdmin">Confidentialite</Link></li>
            </ul>
            <p className="fw-bold mt-4 p-2 admin-title">Resultat</p>
            <ul className="list-gestion list-unstyled">
                <li className="list-gestion-content"><BsTelephoneInboundFill className="me-2"/><Link to="/candidat">President</Link></li>
                <li className="list-gestion-content"><BsLinkedin className="me-2"/><Link to="/eleve">vice President</Link></li>
            </ul>
        </>
  )
}

export default Sidebar