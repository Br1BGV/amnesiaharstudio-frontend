import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Map from "../components/Map";

const Contact = () => {
  return (
    <section className="contact-page d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container mt-5 mb-5">
        <h2 className="fw-bold mt-4">Contacto</h2>
        <p>Estamos para ayudarte. Envíanos tu consulta.</p>

        <div className="row d-flex justify-content-center align-items mt-4 mb-md-4 px-4">
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

        <div className="row d-flex justify-content-center align-items mt-1 mb-md-3 mb-3 px-4">
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

        <div className="row d-flex justify-content-center align-items mt-1 mb-md-4 mb-4 px-4">
          <div className="col-md-10 d-flex flex-column">
            <form className="contact-form mt-2 p-3 rounded ">
              <h3 className="fw-bold">Contáctanos</h3>
              <p>Completá el formulario y te responderemos a la brevedad.</p>
              <div className="mt-3 mb-3 text-start">
                <label>Nombre</label>
                <input
                  type="nombre"
                  className="input-contact rounded mt-2 mb-2 w-100"
                  name="nombre"
                  required
                />
                <label>Apellido</label>
                <input
                  type="apellido"
                  className="input-contact rounded mt-2 mb-2 w-100"
                  name="apellido"
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  className="input-contact rounded mt-2 mb-2 w-100"
                  name="email"
                  required
                />
                <label>Mensaje</label>
                <textarea
                  type="nombre"
                  className="input-contact mt-2 mb-2 w-100 rounded"
                  name="nombre"
                  required
                />
                <button className="btn btn-success w-100 fw-bold login-btn mt-3">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items mt-1 mb-md-4 px-4">
          <div className="col-md-10 d-flex flex-column">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
