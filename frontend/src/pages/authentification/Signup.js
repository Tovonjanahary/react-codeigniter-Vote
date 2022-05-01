import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

const Signup = () => {
    const { id } = useParams();
    const initialeState = { email: "", password: ""};
    const [state, setState] = useState(initialeState);
    const { email, password } = state;
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.patch(`http://localhost:80/react-codeigniter-Vote/signup/${id}`, {...state});
            if(data.data.status !== 201) {
                setError(data.data.message.error);
            } else {
                window.location.href="/connexion";
            }
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
            <motion.div className="shadow-sm m-5 p-4 signup border-rounded"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type:'spring', delay: 0.3}}
            >
                <h3 className="text-center mb-4 lead">initialisez vos email et vos de passe !</h3>
                { error && <p className="text-danger text-center">{error} </p>}
                <form onSubmit={handleSubmit}>
                    <div className= "form-group mt-4">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="form-control" value={email} onChange={handleChange}/>
                    </div>
                    <div className= "form-group mt-4">
                        <label htmlFor="password">mot de passe</label>
                        <input type="password" name="password" className="form-control my-2" value={password} onChange={handleChange}/>
                    </div>
                    <Button type="submit" className="btn btn-secondary mt-4">valider</Button>
                </form>
            </motion.div>
    )
}

export default Signup;