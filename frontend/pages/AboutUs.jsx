import { FaAward, FaCut, FaUsers, FaHeart, FaChartLine } from "react-icons/fa";
import imagenMuestra from "../img/corteIA.png";

const AboutUs = () => {
  return (
    <section className="aboutUs-page d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container mt-5 mb-5">
        <h2 className="fw-bold mt-4">Nosotros</h2>
        <div className="row align-items mt-4 mb-4 px-4">
          <p>
            Amnesia Hair Studio es un espacio donde el estilo, la precisión y la
            actitud se encuentran. Fusionamos barbería clásica con tendencias
            modernas para ofrecer una experiencia personalizada, enfocada en
            realzar tu imagen y potenciar tu presencia. Cada detalle está
            pensado para que te sientas cómodo, seguro y con un look que
            realmente te represente.
          </p>
        </div>
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
        <h3 className="fw-bold mt-5 mb-md-5 mb-4">Nuestro Equipo</h3>
        <div className="row align-items-center justify-content-center mt-1 mb-5 px-4">
          <div className="col-md-4">
            <img src={imagenMuestra} className="aboutUs-img rounded" />
            <h4 className="fw-bold">Thiago</h4>
          </div>
          <div className="col-md-4">
            <img src={imagenMuestra} className="aboutUs-img rounded" />
            <h4 className="fw-bold">Thiago</h4>
          </div>
        </div>
        <h3 className="fw-bold mt-5 mb-md-5 mb-4">Nuestros Valores</h3>
        <div className="row align-items-center justify-content-center mt-1 mb-5 px-4">
          <div className="col-md-3">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaAward className="home-icon mb-3" />
              <h5 className="fw-bold mb-3">Excelencia</h5>
              <p>Buscamos la perfección en cada corte y servicio que ofrecemos</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaUsers className="home-icon mb-3" />
              <h5 className="fw-bold mb-3">Comunidad</h5>
              <p>Somos más que un negocio, somos parte de la comunidad</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaHeart className="home-icon mb-3" />
              <h5 className="fw-bold mb-3">Pasión</h5>
              <p>Amamos lo que hacemos y se nota en cada detalle</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="home-card h-100 p-4 text-center rounded shadow-sm">
              <FaChartLine className="home-icon mb-3" />
              <h5 className="fw-bold mb-3">Innovación</h5>
              <p>Constantemente aprendemos y adoptamos nuevas técnicas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
