import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "../src/styles/DatePickerDark.css";
import "../src/styles/Reservation.css";
import { Wallet } from "@mercadopago/sdk-react";

const API = import.meta.env.VITE_API_URL;

const Reservation = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const isLogged = !!token;
  const clienteId = isLogged ? user.id : null;

  const [step, setStep] = useState(1);
  const [metodoPago, setMetodoPago] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);

  const [servicios, setServicios] = useState([]);
  const [barberos, setBarberos] = useState([]);
  const [diasDisponibles, setDiasDisponibles] = useState([]);
  const [horarios, setHorarios] = useState([]);

  const [requiereOTP, setRequiereOTP] = useState(false);
  const [codigoOTP, setCodigoOTP] = useState("");
  const [tokenReserva, setTokenReserva] = useState(null);
  const [reservaFinal, setReservaFinal] = useState(null);

  const [form, setForm] = useState({
    nombre: isLogged ? user.nombre : "",
    apellido: isLogged ? user.apellido : "",
    email: isLogged ? user.email : "",
    telefono: isLogged ? user.telefono : "",
    servicioId: "",
    barberoId: "",
    fecha: null,
    horaInicio: "",
  });

  useEffect(() => {
    axios.get(`${API}/api/Servicios`).then(res => setServicios(res.data));
    axios.get(`${API}/api/Empleados/barberos`).then(res => setBarberos(res.data));
    axios.get(`${API}/api/Reservas/dias?diasHaciaAdelante=30`)
      .then(res => setDiasDisponibles(res.data));
  }, []);

  useEffect(() => {
    if (form.fecha && form.servicioId && form.barberoId) {
      const fechaStr = form.fecha.toISOString().split("T")[0];
      axios.get(
        `${API}/api/Reservas/disponibilidad?fecha=${fechaStr}&barberoId=${form.barberoId}&servicioId=${form.servicioId}`
      ).then(res => setHorarios(res.data));
    }
  }, [form.fecha, form.servicioId, form.barberoId]);

  const confirmarReserva = async () => {
    try {
      const dto = {
        clienteId,
        barberoId: parseInt(form.barberoId),
        servicioId: parseInt(form.servicioId),
        fecha: form.fecha.toISOString(),
        horaInicio: form.horaInicio,
        nombre: form.nombre,
        email: form.email,
        telefono: form.telefono,
      };

      const authHeader = token
        ? `Bearer ${token}`
        : tokenReserva
        ? `Bearer ${tokenReserva}`
        : null;

      const res = await axios.post(
        `${API}/api/Reservas`,
        dto,
        authHeader ? { headers: { Authorization: authHeader } } : {}
      );

      setReservaFinal(res.data.reserva);
      setStep(4);
    } catch {
      alert("Error creando reserva");
    }
  };

  const pagarReserva = async () => {
    try {
      const res = await fetch(`${API}/api/pagos/crear-test`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reservaId: reservaFinal.id,
          monto: reservaFinal.precioServicio,
        }),
      });

      const data = await res.json();
      setPreferenceId(data.preferenceId);
    } catch {
      alert("No se pudo iniciar el pago");
    }
  };

  return (
    <section className="reservation-wrapper">
      <h2 className="res-title">Reservar Cita</h2>

      <div className="reservation-card">

        {/* ================= PASO 4 ================= */}
        {step === 4 && reservaFinal && (
          <div className="confirm-box">
            <h3 className="confirm-title">¿Cómo querés pagar?</h3>

            <p><strong>Total:</strong> ${reservaFinal.precioServicio}</p>

            <button
              className={`confirm-btn ${metodoPago === "MP" ? "active" : ""}`}
              onClick={() => {
                setMetodoPago("MP");
                setPreferenceId(null);
              }}
            >
              💳 Mercado Pago
            </button>

            <button
              className={`confirm-btn ${metodoPago === "TIENDA" ? "active" : ""}`}
              onClick={() => {
                setMetodoPago("TIENDA");
                setPreferenceId(null);
              }}
            >
              💈 Pagar en la tienda
            </button>

            {/* MERCADO PAGO */}
            {metodoPago === "MP" && (
              <>
                {!preferenceId && (
                  <button className="confirm-btn mt-3" onClick={pagarReserva}>
                    Ir a pagar
                  </button>
                )}

                {preferenceId && (
                  <div style={{ marginTop: 20, width: 300 }}>
                    <Wallet initialization={{ preferenceId }} />
                  </div>
                )}
              </>
            )}

            {/* PAGO EN TIENDA */}
            {metodoPago === "TIENDA" && (
              <>
                <p className="mt-3">
                  Tu reserva quedará confirmada y pagarás en el local.
                </p>

                <button
                  className="confirm-btn"
                  onClick={async () => {
                    await axios.post(
                      `${API}/api/Reservas/${reservaFinal.id}/confirmar-pago-tienda`
                    );
                    setStep(5);
                  }}
                >
                  Confirmar reserva
                </button>
              </>
            )}
          </div>
        )}

        {/* ================= PASO 5 ================= */}
        {step === 5 && (
          <div className="confirm-box">
            <div className="confirm-icon">✔️</div>
            <h3 className="confirm-title">¡Reserva confirmada!</h3>

            {metodoPago === "TIENDA" && (
              <p>El pago se realizará en la barbería.</p>
            )}

            {metodoPago === "MP" && (
              <p>El pago fue procesado correctamente.</p>
            )}

            <div className="confirm-btn-row">
              <button onClick={() => setStep(1)}>Nueva reserva</button>
              <button onClick={() => window.location.href = "/misreservas"}>
                Ver mis reservas
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservation;
