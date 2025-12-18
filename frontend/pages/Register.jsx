import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/AmnesiaFooterTransparente.png";

const Register = () => {
  const navigate = useNavigate();
 const API = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = async (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
    setError(null);

    try {
      const body = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        telefono: formData.telefono,
        email: formData.email,
        password: formData.password,
      };

      const res = await axios.post(
         `${API}/api/Clientes`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Cliente creado:", res.data);

      navigate("/login", { state: { registrado: true } });
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al registrarse.");
        console.log(err.response);
      } else {
        setError("Error de conexión con el servidor.");
      }
    }
  };

  return (
    <div className="register d-flex justify-content-center align-items-center">
      <form className="register-form p-4 rounded" onSubmit={handleSubmit}>
        <img src={logo} alt="Amnesia" width="100" className="mb-3" />
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3 text-start">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="register-form mt-1"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 text-start">
              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                className="register-form mt-1"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 text-start">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                className="register-form mt-1"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 mt-0">
            <div className="mb-3 text-start">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="register-form mt-1"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 text-start">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                className="register-form mt-1"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success w-100 fw-bold register-btn mt-2 mb-3"
        >
          Registrarse
        </button>
        <Link to="/login" className="text-decoration-none mt-3 reset-link">
          Ya tengo cuenta
        </Link>

        {error && <p className="text-danger error-text text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
