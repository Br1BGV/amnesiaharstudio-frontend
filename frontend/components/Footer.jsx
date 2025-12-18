import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../img/AmnesiaFooterTransparente.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-3 col-sm-6 text-center mb-3 mb-md-0">
            <img src={logo} alt="Amnesia" width="100" className="mb-3" />
            <p>
              Combinamos estilo moderno y precisión para ofrecerte una
              experiencia de barbería única. En el corazón de Uruguay, más que
              un corte, una experiencia.
            </p>
          </div>

          <div className="col-md-3 col-sm-6 text-center mb-3 mb-md-0">
            <h4 className="footer-title">Menú</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/home" className="footer-link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="footer-link">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/reservar" className="footer-link">
                  Reservar
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="footer-link">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="footer-link">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="footer-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 text-center">
            <h4 className="footer-title">Contacto</h4>
            <p>Juan Paullier 1364, Montevideo, Uruguay</p>
            <p>(+598) 99 250 366</p>
            <p>info@amnesiabarber.com.uy</p>
          </div>

          <div className="col-md-3 col-sm-6 text-center">
            <h4 className="footer-title">Horarios</h4>
            <p>Lunes a Viernes de 10:00 - 20:00</p>
            <p>Sábados de 10:00 - 18:00</p>
          </div>

          <div>
            <div className="social-icons d-flex justify-content-center gap-3 mt-3 pt-3 ">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/59892123456"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-3 mb-3 text-secondary" />
        <p className="text-center text-secondary small mb-0 pb-3">
          © {new Date().getFullYear()} Amnesia Hair Studio. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
