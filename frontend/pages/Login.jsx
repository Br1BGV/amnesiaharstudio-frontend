import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../img/AmnesiaFooterTransparente.png";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const API = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
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
      const res = await axios.post(`${API}/api/Login/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const token = res.data.token;
      const user = res.data.usuario;

      console.log("Token:", token);
      console.log("Usuario:", user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.dispatchEvent(new Event("userChanged"));

      navigate("/mis-reservas");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError(err.response.data.message);
      } else {
        setError("Error al iniciar sesión. Intente nuevamente.");
      }
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const tokenGoogle = credentialResponse.credential;
      const decoded = jwtDecode(tokenGoogle);
      console.log("Usuario Google:", decoded);

      const response = await axios.post(
        `${API}/api/Login/google`,
        { token: tokenGoogle },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));
      window.dispatchEvent(new Event("userChanged"));

      navigate("/mis-reservas");
    } catch (err) {
      console.error(err);
      setError("Error al iniciar sesión con Google");
    }
  };

  const handleGoogleError = () => {
    setError("Error al autenticar con Google");
  };

  return (
    <div className="login d-flex justify-content-center align-items-center">
      <form className="login-form p-4 rounded" onSubmit={handleSubmit}>
        {/*  Cartel de registro exitoso */}
        {location.state?.registrado && (
          <div className="alert alert-success text-center">
            Registro exitoso. Ahora puedes iniciar sesión.
          </div>
        )}

        <img src={logo} alt="Amnesia" width="100" />
        <div className="text-center mt-3 mb-3">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </div>
        <div className="mt-3 mb-3 text-start">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="login-form mt-1"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="login-form mt-1 "
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <Link
          to="/resetpassword"
          className="text-decoration-none mt-3 reset-link"
        >
          Olvidé mi contraseña
        </Link>
        <button
          type="submit"
          className="btn btn-success w-100 fw-bold login-btn mt-3 mb-3"
        >
          Ingresar
        </button>
        <Link to="/register" className="text-decoration-none mt-3 reset-link">
          No tienes cuenta? Registrate
        </Link>

        {error && <p className="text-danger error-text text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
