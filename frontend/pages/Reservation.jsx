import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "../src/styles/DatePickerDark.css";
import "../src/styles/Reservation.css";

const API = import.meta.env.VITE_API_URL;

const Reservation = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const isLogged = !!token;
  const clienteId = isLogged ? user.id : null;

  const [step, setStep] = useState(1);

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
    axios.get(`${API}/api/Servicios`).then((res) => setServicios(res.data));
    axios
      .get(`${API}/api/Empleados/barberos`)
      .then((res) => setBarberos(res.data));
    axios
      .get(`${API}/api/Reservas/dias?diasHaciaAdelante=30`)
      .then((res) => setDiasDisponibles(res.data));
  }, []);

  useEffect(() => {
    if (form.fecha && form.servicioId && form.barberoId) {
      const fechaStr = form.fecha.toISOString().split("T")[0];

      axios
        .get(
          `${API}/api/Reservas/disponibilidad?fecha=${fechaStr}&barberoId=${form.barberoId}&servicioId=${form.servicioId}`
        )
        .then((res) => setHorarios(res.data));
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
    } catch (err) {
      console.error(err);
      alert("Error creando reserva");
    }
  };
  const pagarReserva = async () => {
  if (!reservaFinal) return;

  try {
    const response = await fetch(`${API}/api/pagos/crear-test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reservaId: reservaFinal.id,
        monto: reservaFinal.precioServicio,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al iniciar el pago");
    }

    const data = await response.json();

    if (!data.sandboxInitPoint) {
      throw new Error("No se recibió la URL de pago");
    }

    window.location.href = data.sandboxInitPoint;
  } catch (err) {
    console.error(err);
    alert("No se pudo iniciar el pago. Intente nuevamente.");
  }
};


  return (
    <section className="reservation-wrapper">
      <h2 className="res-title">Reservar Cita</h2>
      <p className="res-subtitle">
        Completa el formulario para agendar tu cita.
      </p>

      {/* STEPPER */}
      {step !== 4 && (
        <div className="stepper">
          <div className={`step-circle ${step >= 1 ? "active" : ""}`}>1</div>
          <div className="step-line"></div>
          <div className={`step-circle ${step >= 2 ? "active" : ""}`}>2</div>
          <div className="step-line"></div>
          <div className={`step-circle ${step >= 3 ? "active" : ""}`}>3</div>
        </div>
      )}

      <div className="reservation-card">
        {/* ================= PASO 1 ================= */}
        {step === 1 && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              // Si está logueado, no hace falta OTP
              if (isLogged) {
                setStep(2);
                return;
              }

              try {
                console.log(API);
                const res = await axios.post(
                  `${API}/api/Reservas/prevalidar-email`,
                  { email: form.email }
                );

                if (res.data.requiereVerificacion) {
                  setRequiereOTP(true); // mostramos input de código
                } else {
                  setStep(2); // invitado normal
                }
              } catch (err) {
                alert("Error validando email");
              }
            }}
          >
            <h3 className="section-title mb-4">Información Personal</h3>

            <label className="mb-1">Nombre *</label>
            <input
              className="res-input"
              value={form.nombre}
              readOnly={isLogged}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
            />

            <label className="mb-1">Apellido *</label>
            <input
              className="res-input"
              value={form.apellido}
              readOnly={isLogged}
              onChange={(e) => setForm({ ...form, apellido: e.target.value })}
              required
            />

            <label className="mb-1">Email *</label>
            <input
              type="email"
              className="res-input"
              value={form.email}
              readOnly={isLogged}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            {requiereOTP && (
              <>
                <label className="mb-1">Código de verificación *</label>
                <input
                  className="res-input"
                  value={codigoOTP}
                  onChange={(e) => setCodigoOTP(e.target.value)}
                  placeholder="Ingresá el código que llegó a tu mail"
                  required
                />

                <button
                  type="button"
                  className="res-btn mt-2"
                  onClick={async () => {
                    try {
                      const res = await axios.post(
                        `${API}/api/Reservas/validar-codigo`,
                        {
                          email: form.email,
                          codigo: codigoOTP,
                        }
                      );

                      setTokenReserva(res.data.tokenReserva);
                      setStep(2);
                    } catch (err) {
                      alert("Código inválido o expirado");
                    }
                  }}
                >
                  Validar código
                </button>
              </>
            )}
            <label className="mb-1">Teléfono *</label>
            <PhoneInput
              defaultCountry="uy"
              value={form.telefono}
              onChange={(phone) => setForm({ ...form, telefono: phone })}
              inputClassName="phone-input"
              forceDialCode
            />

            <button className="res-btn mt-4" type="submit">
              Siguiente
            </button>
          </form>
        )}

        {/* ================= PASO 2 ================= */}
        {step === 2 && (
          <>
            <h3 className="section-title">Selecciona Servicio y Barbero</h3>
            <p className="section-desc">
              Elige el servicio y tu barbero preferido.
            </p>

            <label>Servicio *</label>
            <select
              className="res-select"
              value={form.servicioId}
              onChange={(e) => setForm({ ...form, servicioId: e.target.value })}
            >
              <option value="">Seleccionar servicio</option>
              {servicios.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nombre}
                </option>
              ))}
            </select>

            <label>Barbero *</label>
            <select
              className="res-select"
              value={form.barberoId}
              onChange={(e) => setForm({ ...form, barberoId: e.target.value })}
            >
              <option value="">Seleccionar barbero</option>
              {barberos.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.nombreCompleto.nombre}
                </option>
              ))}
            </select>

            <div className="btn-row">
              <button className="res-btn-back" onClick={() => setStep(1)}>
                Anterior
              </button>
              <button className="res-btn" onClick={() => setStep(3)}>
                Siguiente
              </button>
            </div>
          </>
        )}

        {/* ================= PASO 3 ================= */}
        {step === 3 && (
          <>
            <h3 className="section-title">Fecha y Hora</h3>
            <p className="section-desc">Selecciona cuándo quieres tu cita.</p>

            <div className="step3-block">
              <label>Fecha *</label>
              <DatePicker
                selected={form.fecha}
                onChange={(fecha) => setForm({ ...form, fecha })}
                dateFormat="yyyy-MM-dd"
                inline
                filterDate={(d) =>
                  diasDisponibles.some((x) =>
                    x.startsWith(d.toISOString().split("T")[0])
                  )
                }
                calendarClassName="always-open"
              />

              <label>Hora *</label>
              <div className="time-grid">
                {horarios.map((h) => (
                  <div
                    key={h}
                    onClick={() => setForm({ ...form, horaInicio: h })}
                    className={`time-slot ${
                      form.horaInicio === h ? "time-selected" : ""
                    }`}
                  >
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-row">
              <button className="res-btn-back" onClick={() => setStep(2)}>
                Anterior
              </button>
              <button className="res-btn" onClick={confirmarReserva}>
                Confirmar
              </button>
            </div>
          </>
        )}

        {/* ================= PASO 4 ================= */}
        {step === 4 && reservaFinal && (
          <div className="confirm-box">
            <div className="confirm-icon">✔️</div>
            <h3 className="confirm-title">¡Reserva confirmada!</h3>

            <div className="confirm-data">
              <p>
                <strong>Cliente:</strong> {form.nombre}
              </p>
              <p>
                <strong>Servicio:</strong> {reservaFinal.nombreServicio}
              </p>
              <p>
                <strong>Barbero:</strong> {reservaFinal.nombreBarbero}
              </p>
              <p>
                <strong>Fecha:</strong> {reservaFinal.fecha.split("T")[0]}
              </p>
              <p>
                <strong>Hora:</strong> {reservaFinal.horaInicio}
              </p>
            </div>

            <div className="confirm-btn-row">
              <button className="confirm-btn" onClick={() => setStep(1)}>
                Hacer otra reserva
              </button>

              <button
                className="confirm-btn-outline"
                onClick={() => (window.location.href = "/misreservas")}
              >
                Ver mis reservas
              </button>
            </div>

            <button onClick={pagarReserva}>Pagar reserva</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservation;
