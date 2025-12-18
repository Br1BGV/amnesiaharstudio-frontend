import { FaClock, FaAward, FaShieldAlt, FaMagic } from "react-icons/fa";
import corteIA from "../img/corteIA.png";
import BarbaIA from "../img/BarbaIA.png";
import CorteBarbaIA from "../img/CorteBarbaIA.png";
import MechasConGorraIA from "../img/MechasConGorraIA.png";
import PlatinadoIA from "../img/PlatinadoIA.png";
import logo from "../img/AmnesiaFooterTransparente.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services-page d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container mt-5 mb-5">
        <h2 className="fw-bold mt-4">Servicios</h2>
        <p>Desde cortes clásicos hasta tratamientos especializados</p>
        <p>(Perfilado de cejas incluido en todos los servicios)</p>
        <div className="row d-flex align-items-stretch mt-1 mb-md-4 px-4">
          <div className="col-md-4">
            <div className="h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
              <img src={corteIA} className="rounded mb-4" />
              <h5 className="fw-bold mb-3">Corte</h5>
              <p>
                Cortes modernos y precisos, con terminaciones limpias y atención
                al detalle.
              </p>
              <p>Comienza desde:</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="price-service">$390</p>
                </div>
                <div className="text-end">
                  <button className="btn btn-services px-4 fw-bold">Reservar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
              <img src={BarbaIA} className="rounded mb-4" />
              <h5 className="fw-bold mb-3">Barba</h5>
              <p>
                Perfilado profesional, simetría y definición con máquina o
                navaja según preferencia
              </p>
              <p>Comienza desde:</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="price-service">$180</p>
                </div>
                <div className="text-end">
                  <button className="btn btn-services px-4 fw-bold">Reservar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
              <img src={CorteBarbaIA} className="rounded mb-4" />
              <h5 className="fw-bold mb-3">Corte + Barba</h5>
              <p>
                El combo perfecto: definición de líneas y un fade impecable que
                realza tu estilo.
              </p>
              <p>Comienza desde:</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="price-service">$420</p>
                </div>
                <div className="text-end">
                  <button className="btn btn-services px-4 fw-bold">Reservar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-stretch mt-1 mb-md-4 px-4">
          <div className="col-md-4">
            <div className="h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
              <img src={MechasConGorraIA} className="rounded mb-4" />
              <h5 className="fw-bold mb-3">Mechas con Gorra</h5>
              <p>
                Reflejos naturales o contrastados según tu estilo. Técnica
                clásica, resultado moderno.
              </p>
              <p>Comienza desde:</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="price-service">$1500</p>
                </div>
                <div className="text-end">
                  <button className="btn btn-services px-4 fw-bold">Reservar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
              <img src={PlatinadoIA} className="rounded mb-4" />
              <h5 className="fw-bold mb-3">Platinado Global</h5>
              <p>
                Transformá tu look con un platinado completo, brillante y bien
                cuidado
              </p>
              <p>Comienza desde:</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="price-service">$1800</p>
                </div>
                <div className="text-end">
                  <button className="btn btn-services px-4 fw-bold">Reservar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-stretch mt-1 mb-md-4 px-4">
          <div className="col-md-6">
            <div className="cuponera-card h-100 p-4 text-start rounded shadow-sm d-flex flex-column justify-content-between">
              <h5 className="fw-bold mb-3">
                Cuponera <img src={logo} alt="Amnesia" width="100" />
              </h5>
              <p>
                La Cuponera Amnesia es un beneficio exclusivo para quienes se
                cortan con frecuencia. Incluye hasta 5 cortes al mes a un precio
                preferencial, ideal para mantener tu estilo siempre impecable y
                ahorrar en cada visita.
              </p>
              <p>Comienza desde:</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="price-service">$1500</p>
                </div>
                <div className="text-end">
                  <button className="btn btn-services px-4 fw-bold">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="fw-bold mt-5 mb-md-5 mb-4">¿Por qué elegirnos?</h3>

        <div className="row d-flex justify-content-center align-items mt-1 mb-md-4 px-4">
          <div className="col-md-3">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaAward className="home-icon  mb-3" />
              <h5 className="fw-bold mb-3">Barberos Profesionales</h5>
              <p>
                Equipo certificado con años de experiencia en el arte de la
                barbería
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaMagic className="home-icon  mb-3" />
              <h5 className="fw-bold mb-3">Productos Premium</h5>
              <p>
                Usamos solo las mejores marcas del mercado para resultados
                superiores
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaShieldAlt className="home-icon  mb-3" />
              <h5 className="fw-bold mb-3">Higiene Garantizada</h5>
              <p>
                Protocolos estrictos de limpieza y esterilización de
                herramientas
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaClock className="home-icon  mb-3" />
              <h5 className="fw-bold mb-3">Puntualidad</h5>
              <p>Respetamos tu tiempo con un sistema de reservas eficiente</p>
            </div>
          </div>
        </div>
        <h3 className="fw-bold mt-5 mb-md-5 mb-4">
          ¿Listo para tu nuevo look?
        </h3>

        <div className="row d-flex justify-content-center align-items mt-1 mb-md-4 px-4">
          <Link
            to="/reserve"
            className="btn btn-success col-md-3 col-5 text-center fw-bold login-btn mt-3"
          >
            Reservar cita
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
