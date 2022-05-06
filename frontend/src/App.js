import { Route, Switch, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Connexion from './pages/authentification/Connexion';
import Guide from './pages/Guide';
import Inscription from './pages/authentification/Inscription';
import Signup from './pages/authentification/Signup';
import Vote from './pages/candidat/Vote';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import President from './pages/candidat/candidat';
import { AnimatePresence } from "framer-motion";
import ModifierCandidat from './pages/admin-dashboard/candidat/ModifierCandidat';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';

function App() {

  const location = useLocation();

  return (
    <>
        <Layout>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Accueil} />
              <Route path="/guide" component={Guide} />
              <Route path="/connexion" component={Connexion} />
              <Route path="/inscription" component={Inscription} />
              <Route path="/signup/:id" component={Signup} />
              <Route path="/vote" component={Vote} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/president/:id" component={President} />
              <Route path="/modifierPresident/:id" component={ModifierCandidat} />
              <Route path="/adminDashboard" component={AdminDashboard} />
              <Route path="*" component={NotFound} />
            </Switch>
          </AnimatePresence>
        </Layout>
    </>
  );
}

export default App;
