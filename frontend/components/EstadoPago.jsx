import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const EstadoPago = ({ esperado, mensajeOk, mensajeDefault }) => {
  const [searchParams] = useSearchParams();
  const reservaId = searchParams.get("external_reference");
  const token = localStorage.getItem("token");

  const [estado, setEstado] = useState("Verificando estado del pago...");

  useEffect(() => {
    if (!reservaId) {
      setEstado("No se pudo identificar la reserva");
      return;
    }

    const interval = setInterval(async () => {
      const response = await fetch(`${API}/api/reservas/${reservaId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) return;

      const reserva = await response.json();

      if (reserva.estado === esperado) {
        setEstado(mensajeOk);
        clearInterval(interval);
      } else {
        setEstado(mensajeDefault);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [reservaId, token, esperado, mensajeOk, mensajeDefault]);

  return (
    <div style={{ textAlign: "center", marginTop: "80px", minHeight: "300px" }}>
      <h2>{estado}</h2>
    </div>
  );
};

export default EstadoPago;
