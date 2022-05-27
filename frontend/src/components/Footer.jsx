import { BsTelephoneInboundFill, BsTelegram, BsWhatsapp, BsYoutube, BsTwitter, BsSuitHeartFill, BsFacebook } from "react-icons/bs";
// BsMessenger, BsPersonCircle,BsLinkedin

const Footer = () => {
  return (
    <footer className="footer justify-content-center py-5">
      <section className="container">
        <div className="row ">
          <div className="col-md-3">
            <p className=" fw-bold">Nos contact</p>
            <ul className="list-unstyled ">
              <li><BsTelegram className="me-2" />Email: Emit@gmail.com</li>
              <li><BsTelephoneInboundFill className="me-2" />contact: 0324945834</li>
              <li><BsWhatsapp className="me-2" />Whatsapp</li>
              <li><BsSuitHeartFill className="me-2" />j'adore</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className=" fw-bold">lien utile</p>
            <ul className="list-unstyled ">
              <li>EmitFianarantsoa.fr</li>primary
              <li>Graphikart.fr</li>
              <li>the net-ninja.uk</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className=" fw-bold">reseau sociaux</p>
            <ul className="list-unstyled ">
              <li><BsFacebook className="me-2 bg-primary border rounded p-1" />Facebook</li>
              <li><BsTelegram className="me-2 bg-warning border rounded p-1" />Instagram</li>
              <li> <BsTwitter className="me-2 bg-secondary border rounded p-1" />Twitter</li>
              <li> <BsYoutube className="me-2 bg-danger border rounded p-1" />Youtube</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className=" fw-bold">references</p>
            <ul className="list-unstyled ">
              <small>ce site est reserve seulement aux etudiants de l'EMIT Fianarantsoa pour l'election de leur president...</small>
            </ul>
          </div>
        </div>
      </section>
      <div id="copyright" className="container text-center mt-4 pt-3">
        Copyright Tenzo Rama, 2022
      </div>
    </footer>
  )
}

export default Footer;