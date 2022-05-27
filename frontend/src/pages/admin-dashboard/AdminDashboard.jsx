import React from 'react'
import { useEffect } from 'react';
import { BsLinkedin, BsMessenger, BsPersonCircle, BsTelephoneInboundFill } from 'react-icons/bs';
import { Link, Route, Switch } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import AjouterAdmin from './AjouterAdmin';
import Eleves from './eleves/Eleves';
import Candidat from './candidat/Candidat';
import Resultat from './Resultat';

const AdminDashboard = ({ history }) => {

  const getColor = (curr) => {
    if (history.location.pathname === curr) {
      return 'active';
    }
  }
  const { path, url } = useRouteMatch();

  const eleveConnectee = JSON.parse(localStorage.getItem('login'));
  const histori = useHistory();

  useEffect(() => {
    if ((eleveConnectee && eleveConnectee.isAdmin !== "1") || (!eleveConnectee)) {
      histori.push("/connexion");
    }
  }, [eleveConnectee, histori]);

  return (
    <div className="row container-xxl align-items-start justify-content-center">
      <nav className="col-lg-2 bg-light shadow sidebar">
        <p className="fw-bold mt-4 p-2 admin-title">Administration</p>
        <ul className="list-gestion list-unstyled">
          <li className={getColor(`${path}`)}><BsTelephoneInboundFill className="me-2" />
            <Link to={`${url}`}>Candidat</Link>
          </li>
          <li className={getColor(`${path}/eleves`)}><BsMessenger className="me-2" />
            <Link to={`${url}/eleves`}>Eleves</Link>
          </li>
          <li className={getColor(`${path}/ajouterAdmin`)}><BsPersonCircle className="me-2" />
            <Link to={`${url}/ajouterAdmin`}>Confidentialite</Link>
          </li>
        </ul>
        <p className="fw-bold mt-4 p-2 admin-title">Resultat</p>
        <ul className="list-gestion list-unstyled">
          <li className={getColor(`${path}/resultat`)}><BsTelephoneInboundFill className="me-2" /><Link to={`${url}/resultat`}>Resultat</Link></li>
          <li className="list-gestion-content"><BsLinkedin className="me-2" /><Link to="/eleve">vice President</Link></li>
        </ul>
      </nav>
      <div className="col-lg-10">
        <Switch>
          <Route exact path={`${path}`} component={Candidat} />
          <Route path={`${path}/eleves`} component={Eleves} />
          <Route path={`${path}/ajouterAdmin`} component={AjouterAdmin} />
          <Route path={`${path}/resultat`} component={Resultat} />
        </Switch>
      </div>
    </div>
  )
}

export default AdminDashboard