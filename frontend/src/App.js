import { Route, Switch, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Connexion from './pages/authentification/Connexion';
import Guide from './pages/Guide';
import Inscription from './pages/authentification/Inscription';
import Signup from './pages/authentification/Signup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import President from './pages/candidat/President';
import { AnimatePresence } from "framer-motion";
import Candidat from './pages/admin-dashboard/president/Candidat';
import Sidebar from './pages/admin-dashboard/Sidebar';
import Eleves from './pages/admin-dashboard/eleves/Eleves';
import ModifierCandidat from './pages/admin-dashboard/president/ModifierCandidat';
import AjouterAdmin from './pages/admin-dashboard/AjouterAdmin';
// import Candidat from './pages/admin-dashboard/Candidat';
// import SideLayout from './pages/admin-dashboard/SideLayout';

function App() {

  const location = useLocation();

  return (
    <>
        <Layout>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Accueil} />
              <Route path="/guide" component={Guide} />
              <Route  path="/apropos" component={Apropos} />
              <Route path="/connexion" component={Connexion} />
              <Route path="/inscription" component={Inscription} />
              <Route path="/signup/:id" component={Signup} />
              <Route path="/vote" component={Vote} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/president/:id" component={President} />
              <Route path="/modifierPresident/:id" component={ModifierCandidat} />
              <Sidebar>
                <Route path="/candidat" component={Candidat} />
                <Route path="/eleve" component={Eleves} />
                <Route path="/ajouterAdmin" component={AjouterAdmin} />
              </Sidebar>
              <Route path="*" component={NotFound} />
            </Switch>
          </AnimatePresence>
        </Layout>
    </>
  );
}

export default App;
