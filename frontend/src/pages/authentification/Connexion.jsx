import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

const Connexion = () => {
  const initialeState = { email: "", password: "" };
  const [state, setState] = useState(initialeState);
  const { email, password } = state;
  const [passwordError, setPasswordError] = useState(false);
  const history = useHistory();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:80/react-codeigniter-Vote/signin", { ...state });
      localStorage.setItem('login', JSON.stringify(data.data));
      history.push("/");

    } catch (error) {
      setError(error.response.data.messages.error);
      if (error.response.data.messages.error === 'mot de passe incorrect') {
        setPasswordError(true);
      }
      state.email = "";
      state.password = "";

    }
  };

  const eleveConnectee = JSON.parse(localStorage.getItem('login'));
  useEffect(() => {
    if (eleveConnectee) {
      history.push("/");
    }
  }, [history, eleveConnectee]);

  const variants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 }
    },
    hidden: {
      opacity: 0.1
    }
  };

  return (
    <motion.div className="row container my-5 align-items-center justify-content-center"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <section className="col-lg-5">
        <div className="container shadow p-5">
          <p className="lead">Se connecter maintenant</p>
          {error && <p className="alert alert-danger text-center">{error} </p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className="form-control" value={email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">mot de passe</label>
              <input type="password" name="password" className="form-control my-2" value={password} onChange={handleChange} />
            </div>
            <button type="submit" className={passwordError ? "nope" : "btn-connexion"}>Connexion</button>
          </form>
          <small>vous n'avez pas de compte ? <span><Link className="text-danger" to="/inscription">S'inscrire</Link> </span></small>
        </div>
      </section>
      <div className="col-lg-7">
        <img src="election-illustration.png" className="img-fluid d-none d-md-block" alt="signin" />
      </div>
    </motion.div>
  )
}

export default Connexion;