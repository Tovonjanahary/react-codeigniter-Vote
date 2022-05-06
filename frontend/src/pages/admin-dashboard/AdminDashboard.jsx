import React from 'react'
import { useEffect } from 'react';
import { BsLinkedin, BsMessenger, BsPersonCircle, BsTelephoneInboundFill } from 'react-icons/bs';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { VoteState } from '../../context/VoteContext';
import AjouterAdmin from './AjouterAdmin';
import Eleves from './eleves/Eleves';
import Candidat from './candidat/Candidat';

const AdminDashboard = ({history}) => {

    const getColor = (curr) => {
        if(history.location.pathname === curr) {
             return 'active';
        }
    }
    const{ path, url } = useRouteMatch();

    const { eleve } = VoteState();
    
    useEffect(() => {
        if((eleve && eleve.isAdmin !== "1") || (eleve === false)) {
            // history.push("*");
            window.location.href = "/errorPage";
        }
    },[eleve]);

  return (
    <div className="row container-xxl align-items-start justify-content-center">
        <nav className="col-lg-2 bg-light shadow sidebar">
            <p className="fw-bold mt-4 p-2 admin-title">Administration</p>
            <ul className="list-gestion list-unstyled">
                <li className={getColor(`${path}`)}><BsTelephoneInboundFill className="me-2"/>
                    <Link to={`${url}`}>Candidat</Link>
                </li>
                <li className={getColor(`${path}/eleves`)}><BsMessenger className="me-2"/>
                    <Link to={`${url}/eleves`}>Eleves</Link>
                </li>
                <li className={getColor(`${path}/ajouterAdmin`)}><BsPersonCircle className="me-2"/>
                    <Link to={`${url}/ajouterAdmin`}>Confidentialite</Link>
                </li>
            </ul>
            <p className="fw-bold mt-4 p-2 admin-title">Resultat</p>
            <ul className="list-gestion list-unstyled">
                <li className="list-gestion-content"><BsTelephoneInboundFill className="me-2"/><Link to="/candidat">President</Link></li>
                <li className="list-gestion-content"><BsLinkedin className="me-2"/><Link to="/eleve">vice President</Link></li>
            </ul>
        </nav>
        <div className="col-lg-10">
            <Switch>
                <Route exact path={`${path}`} component={Candidat}/>
                <Route path={`${path}/eleves`} component={Eleves}/>
                <Route path={`${path}/ajouterAdmin`} component={AjouterAdmin}/>
            </Switch>
        </div>
    </div>
  )
}

export default AdminDashboard