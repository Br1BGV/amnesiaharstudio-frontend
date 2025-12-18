import {
  FaAward,
  FaCalendar,
  FaClock,
  FaCut,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import corte10 from "../img/corte10.jpg";
import corte5 from "../img/corte5.jpg";
import corte7 from "../img/corte7.jpg";
import cursoBasico from "../img/cursobásico.jpg";
import cursoIntermedio from "../img/cursointermedio.jpg";
import logo from "../img/AmnesiaFooterTransparente.png";

const Home = () => {
  return (
    <main>
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center">
        <div className="hero-content">
          <Link to="/reservar" className="btn btn-outline-light btn-lg">
            Reservar Cita
          </Link>
        </div>
      </section>

      {/*AboutUs*/}
      <section className="aboutUs d-flex flex-column justify-content-center align-items-center text-center">
        <div className="container mt-5 mb-5">
          <h2 className="fw-bold">Nosotros</h2>
          <p>Más de 10 años de experiencia en el arte de la barbería</p>
          <div className="row align-items mt-1 mb-5 px-4">
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <FaAward className="home-icon mb-3" />
                <h5 className="fw-bold mb-3">Experiencia Comprobada</h5>
                <p>Más de 10 años sirviendo con orgullo a Montevideo</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <FaUsers className="home-icon mb-3" />
                <h5 className="fw-bold mb-3">Equipo Profesional</h5>
                <p>Barberos expertos, certificados y siempre actualizados</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <FaCut className="home-icon mb-3" />
                <h5 className="fw-bold mb-3">Técnicas Modernas</h5>
                <p>Unimos tradición, estilo y pasión por las tendencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Services*/}
      <section className="services d-flex flex-column justify-content-center align-items-center text-center">
        <div className="container mt-5 mb-5">
          <h2 className="fw-bold">Servicios</h2>
          <p>Desde cortes clásicos hasta tratamientos especializados</p>
          <p>(Perfilado de cejas incluido en todos los servicios)</p>
          <div className="row d-flex align-items-stretch mt-1 mb-md-4 px-4">
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
                <h5 className="fw-bold mb-3">Corte</h5>
                <p>
                  Cortes modernos y precisos, con terminaciones limpias y
                  atención al detalle.
                </p>
                <p>Comienza desde:</p>
                <p className="price-service">$ 390</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
                <h5 className="fw-bold mb-3">Barba</h5>
                <p>
                  Perfilado profesional, simetría y definición con máquina o
                  navaja según preferencia
                </p>
                <p>Comienza desde:</p>
                <p className="price-service">$ 180</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
                <h5 className="fw-bold mb-3">Corte + Barba</h5>
                <p>
                  El combo perfecto: definición de líneas y un fade impecable
                  que realza tu estilo.
                </p>
                <p>Comienza desde:</p>
                <p className="price-service">$ 420</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-stretch mt-1 mb-md-4 px-4">
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
                <h5 className="fw-bold mb-3">Mechas con Gorra</h5>
                <p>
                  Reflejos naturales o contrastados según tu estilo. Técnica
                  clásica, resultado moderno.
                </p>
                <p>Comienza desde:</p>
                <p className="price-service">$ 1500</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
                <h5 className="fw-bold mb-3">Platinado Global</h5>
                <p>
                  Transformá tu look con un platinado completo, brillante y bien
                  cuidado
                </p>
                <p>Comienza desde:</p>
                <p className="price-service">$ 1800</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-stretch mt-md-1 mb-5 px-4">
            <div className="col-md-6">
              <div className="cuponera-card h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
                <h5 className="fw-bold mb-3">Cuponera <img src={logo} alt="Amnesia" width="100" /></h5>
                <p>
                  La Cuponera Amnesia es un beneficio exclusivo para quienes se
                  cortan con frecuencia. Incluye hasta 5 cortes al mes a un
                  precio preferencial, ideal para mantener tu estilo siempre
                  impecable y ahorrar en cada visita.
                </p>
                <p>Comienza desde:</p>
                <p className="price-service">$ 1500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Reserve*/}
      <section className="reserve d-flex flex-column justify-content-center align-items-center text-center">
        <div className="container mt-5 mb-5">
          <FaCalendar className="home-icon mb-3" />
          <h2 className="fw-bold">Reserva tu cita</h2>
          <p>Sistema de reservas online, fácil y rápido</p>
          <div className="row align-items mt-1 mb-5 px-4">
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <div className="circle-number">1</div>
                <h5 className="fw-bold mb-3">Elige tu Servicio</h5>
                <p>Selecciona el servicio que necesitas</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <div className="circle-number">2</div>
                <h5 className="fw-bold mb-3">Selecciona Barbero</h5>
                <p>Elige tu barbero de confianza</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <div className="circle-number">3</div>
                <h5 className="fw-bold mb-3">Confirma Horario</h5>
                <p>Elige fecha y hora disponible</p>
              </div>
            </div>
          </div>
          <Link to="/reservar" className="btn fw-bold btn-outline-light btn-lg">
            Reservar
          </Link>
        </div>
      </section>

      {/*Courses*/}
      <section className="courses d-flex flex-column justify-content-center align-items-center text-center">
        <div className="container mt-5 mb-5">
          <h2 className="fw-bold">Cursos</h2>
          <p>Aprende el arte de la barbería con profesionales experimentados</p>
          <div className="row d-flex justify-content-center align-items-stretch mt-1 mb-md-4 px-4">
            <div className="col-md-6">
              <div className="home-card h-100 p-4 text-start rounded shadow-sm">
                <img src={cursoBasico} alt="" className="course-img" />
                <h5 className="fw-bold mb-3">
                  Introducción a la barbería - Nivel Básico
                </h5>
                <p>
                  Aprende las técnicas fundamentales de barbería: cortes
                  clásicos, uso de herramientas, atención al cliente y más.
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
                  Domina el arte del diseño y perfilado de barba. Incluye
                  afeitado clásico con navaja y técnicas de coloración.
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
        </div>
      </section>

      {/*Gallery*/}
      <section className="gallery d-flex flex-column justify-content-center align-items-center text-center">
        <div className="container mt-5 mb-5">
          <h2 className="fw-bold">Galería</h2>
          <p>Algunos de nuestros trabajos</p>

          <div className="row align-items mt-1 mb-5 px-4">
            <div className="col-md-4">
              <div className="home-card h-100 text-center rounded shadow-sm">
                <img src={corte5} className="gallery-img rounded" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 text-center rounded shadow-sm">
                <img src={corte7} className="gallery-img rounded" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="home-card h-100 text-center rounded shadow-sm">
                <img src={corte10} className="gallery-img rounded" />
              </div>
            </div>
          </div>
          <Link to="/gallery" className="btn fw-bold btn-outline-light btn-lg">
            Ver Galería
          </Link>
        </div>
      </section>

      {/*Contact*/}
      <section className="contact d-flex flex-column justify-content-center align-items-center text-center">
        <div className="container mt-5 mb-5">
          <h2 className="fw-bold">Contacto</h2>
          <p>Sistema de reservas online, fácil y rápido</p>

          <div className="row d-flex justify-content-center align-items mt-1 mb-md-4 px-4">
            <div className="col-md-5">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <FaMapMarkerAlt className="home-icon  mb-3" />
                <h5 className="fw-bold mb-3">Ubicación</h5>
                <p>Juan Paullier 1364, Montevideo, Uruguay</p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <FaPhone className="home-icon phone-icon mb-3" />
                <h5 className="fw-bold mb-3">Teléfono</h5>
                <p>(+598) 95 726 842</p>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items mt-1 mb-5 px-4">
            <div className="col-md-5">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <FaEnvelope className="home-icon  mb-3" />
                <h5 className="fw-bold  mb-3">Email</h5>
                <p>info@amnesiabarber.com.uy</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="home-card h-100 p-4 text-center rounded shadow-sm">
                <FaClock className="home-icon  mb-3" />
                <h5 className="fw-bold mb-3">Horarios</h5>
                <p>Lunes a Viernes de 10:00 - 20:00</p>
                <p>Sábados de 10:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
