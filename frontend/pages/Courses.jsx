import {
  FaClock,
  FaUser,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import cursoBasico from "../img/cursobásico.jpg";
import cursoIntermedio from "../img/cursointermedio.jpg";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section className="courses-page d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container mt-5 mb-5">
        <h2 className="fw-bold mt-4">Cursos</h2>
        <p>Aprende el arte de la barbería con profesionales experimentados</p>
        <div className="row d-flex justify-content-center align-items-stretch mt-1 mb-md-4 px-4">
          <div className="col-md-6">
            <div className="home-card h-100 p-4 text-start rounded shadow-sm">
              <img src={cursoBasico} alt="" className="course-img" />
              <h5 className="fw-bold mb-3">
                Introducción a la barbería - Nivel Básico
              </h5>
              <p>
                Aprende las técnicas fundamentales de barbería: cortes clásicos,
                uso de herramientas, atención al cliente y más.
              </p>
              <p>
                <FaClock /> 20 horas
              </p>
              <p>
                <FaUser /> Instructor: Juan Pérez
              </p>
              <button className="btn fw-bold btn-outline-light btn-lg">
                Ver Detalles
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="home-card h-100 p-4 text-start rounded shadow-sm">
              <img src={cursoIntermedio} alt="" className="course-img" />
              <h5 className="fw-bold mb-3">
                Curso Barbería - Nivel Intermedio
              </h5>
              <p>
                Domina el arte del diseño y perfilado de barba. Incluye afeitado
                clásico con navaja y técnicas de coloración.
              </p>
              <p>
                <FaClock /> 40 horas
              </p>
              <p>
                <FaUser /> Instructor: Daniel Pereira
              </p>
              <button className="btn fw-bold btn-outline-light btn-lg">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>

        <h3 className="fw-bold mt-5 mb-md-5 mb-4">
          ¿Por qué estudiar con nosotros?
        </h3>

        <div className="row d-flex justify-content-center align-items mt-4 mb-md-4 px-4">
          <div className="col-md-4">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaAward className="home-icon  mb-3" />
              <h5 className="fw-bold mb-3">Certificación Oficial</h5>
              <p>Certificado reconocido al finalizar</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaUsers className="home-icon mb-3" />
              <h5 className="fw-bold mb-3">Grupos Reducidos</h5>
              <p>Seguimiento personalizado garantizado</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaClock className="home-icon  mb-3" />
              <h5 className="fw-bold mb-3">Horarios Flexibles</h5>
              <p>Turnos mañana, tarde y noche</p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items mt-4 mb-md-4 px-4">
          <h3 className="fw-bold mt-4 mb-md-4 mb-4">¿Tienes una consulta?</h3>
          <p>
            Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus
            dudas sobre nuestros cursos de formación profesional.
          </p>
          <Link
            to="/contact"
            className="btn btn-success col-md-3 col-5 text-center fw-bold login-btn mt-3"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
