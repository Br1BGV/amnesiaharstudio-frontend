import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const PagoExitoso = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [reserva, setReserva] = useState(null);
  const [estado, setEstado] = useState("verificando"); 
  // verificando | aprobado | pendiente | error

  const reservaId = new URLSearchParams(location.search)
    .get("external_reference");

  useEffect(() => {
    if (!reservaId) {
      setEstado("error");
      return;
    }

    let intentos = 0;

    const interval = setInterval(async () => {
      try {
        const res = await axios.get(`${API}/api/Reservas/estado-reserva/${reservaId}`);
        setReserva(res.data);

        if (res.data.pagada) {
          setEstado("aprobado");
          clearInterval(interval);
        } else {
          intentos++;
          if (intentos >= 5) {
            setEstado("pendiente");
            clearInterval(interval);
          }
        }
      } catch {
        setEstado("error");
        clearInterval(interval);
      }
    }, 2000); // cada 2s

    return () => clearInterval(interval);
  }, []);

  /* ================= UI ================= */

  if (estado === "verificando") {
    return (
      <p style={{ textAlign: "center" }}>
        Verificando estado del pago...
      </p>
    );
  }

  if (estado === "pendiente") {
    return (
      <div className="confirm-box">
        <h3>Pago pendiente</h3>
        <p>
          Estamos esperando la confirmación del pago.
          Si ya pagaste, esto puede tardar unos segundos.
        </p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </div>
    );
  }

  if (estado === "error") {
    return (
      <div className="confirm-box">
        <h3>Error</h3>
        <p>No pudimos verificar el pago.</p>
        <button onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  /* ================= APROBADO ================= */

  return (
    <section className="reservation-wrapper">
      <div className="reservation-card confirm-box">
        <div className="confirm-icon">✔️</div>
        <h3 className="confirm-title">¡Pago aprobado!</h3>

        <div className="confirm-data">
          <p><strong>Cliente:</strong> {reserva.nombreCliente}</p>
          <p><strong>Servicio:</strong> {reserva.nombreServicio}</p>
          <p><strong>Barbero:</strong> {reserva.nombreBarbero}</p>
          <p><strong>Fecha:</strong> {reserva.fecha.split("T")[0]}</p>
          <p><strong>Hora:</strong> {reserva.horaInicio}</p>
          <p><strong>Total:</strong> ${reserva.precioServicio}</p>
          <p><strong>Pago:</strong> Mercado Pago</p>
        </div>

        <div className="confirm-btn-row">
          <button
            className="confirm-btn-outline"
            onClick={() => navigate("/misreservas")}
          >
            Ver mis reservas
          </button>

          <button
            className="confirm-btn-outline"
            onClick={() => navigate("/")}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </section>
  );
};

export default PagoExitoso;
