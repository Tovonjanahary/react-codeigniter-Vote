import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { VoteState } from "../../context/VoteContext";
import { BsTelephoneInboundFill, BsMessenger, BsPersonCircle, BsLinkedin } from "react-icons/bs";


const Sidebar = ({children}) => { 

    const { eleve } = VoteState();
    
    const [active, setActive] = useState(false);
    console.log(active)

    useEffect(() => {
        if((eleve && eleve.isAdmin !== "1") || (eleve === false)) {
            // history.push("*");
            window.location.href = "/";
            console.log(eleve.isAdmin);
        }
    },[eleve]);
    
    return (
        <div className="row container-xxl align-items-start justify-content-center">
            <nav className="col-lg-2 bg-light shadow sidebar">
                <p className="fw-bold mt-4 p-2 admin-title">Admnistration</p>
                <ul className="list-gestion list-unstyled">
                    <li className="list-gestion-content b-active" onClick={() => setActive(!active)}><BsTelephoneInboundFill className="me-2"/><Link to="/candidat" className="">Candidat</Link></li>
                    <li className="list-gestion-content"><BsMessenger className="me-2"/><Link to="/eleve">Eleves</Link></li>
                    <li className="list-gestion-content"><BsPersonCircle className="me-2"/><Link to="/ajouterAdmin">Confidentialite</Link></li>
                </ul>
                <p className="fw-bold mt-4 p-2 admin-title">Resultat</p>
                <ul className="list-gestion list-unstyled">
                    <li className="list-gestion-content"><BsTelephoneInboundFill className="me-2"/><Link to="/candidat">President</Link></li>
                    <li className="list-gestion-content"><BsLinkedin className="me-2"/><Link to="/eleve">vice President</Link></li>
                </ul>
            </nav>
            <div className="col-lg-10">
            {children}
            </div>
        </div>
    )
}

export default Sidebar;