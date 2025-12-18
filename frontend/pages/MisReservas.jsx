import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaCalendar,
  FaClock,
  FaCut,
  FaUser,
  FaFile,
  FaFileArchive,
} from "react-icons/fa";

const MisReservas = () => {
  const API = import.meta.env.VITE_API_URL;

  const [user, setUser] = useState(null);
  const [reservas, setReservas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [motivo, setMotivo] = useState("");
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [showMotivoModal, setShowMotivoModal] = useState(false);
const [motivoVer, setMotivoVer] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!userData || !token) {
      return;
    }

    const user = JSON.parse(userData);
    setUser(user);

    axios
      .get(`${API}/api/Reservas/mis-reservas`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setReservas(res.data))
      .catch((err) =>
        console.log(
          "ERROR MIS RESERVAS:",
          err.response?.status,
          err.response?.data
        )
      );
    console.log(reservas);
  }, []);

  const abrirModalCancelar = (reserva) => {
    setReservaSeleccionada(reserva);
    setMotivo("");
    setShowModal(true);
  };
  const confirmarCancelacion = async () => {
    const token = localStorage.getItem("token");

    if (!motivo.trim()) {
      alert("Debe ingresar un motivo de cancelación");
      return;
    }

    try {
      console.log(reservaSeleccionada);
      await axios.post(
        `${API}/api/Reservas/${reservaSeleccionada.id}/cancelar-cliente`,
        { motivo },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setReservas((prev) =>
        prev.map((r) =>
          r.id === reservaSeleccionada.id
            ? { ...r, estado: "Cancelada", motivoCancelacion: motivo }
            : r
        )
      );

      setShowModal(false);
      alert("Reserva cancelada correctamente");
    } catch (error) {
      console.error("Error al cancelar reserva", error);
      alert("No se pudo cancelar la reserva");
    }
  };
  console.log(user);
  let rol = "";
  if (user) {
    if (user.rol === "Admin") {
      rol = "Administrador";
    } else if (user.rol === "Barbero") {
      rol = "Barbero";
    } else if (user.rol === "Cliente") {
      rol = "";
    }
  }

  return (
    <section className="reservations-page d-flex flex-column text-center">
      <div className="container mt-5 mb-5 text-center">
        {user ? (
          <h2 className="fw-bold">
            Bienvenido, {rol} {user.nombre} 👋
          </h2>
        ) : (
          <h2 className="text-danger fw-bold">
            Debe iniciar sesión para ver esta sección
          </h2>
        )}

        {reservas.length === 0 ? (
          <h3>No tienes reservas</h3>
        ) : (
          reservas.map((r) => (
            <div
              key={r.id}
              className="reservations-card p-5 rounded shadow-sm mt-5"
            >
              <div className="d-flex align-items-center justify-content-between text-start flex-wrap gap-4">
                <div className="d-flex align-items-center gap-3">
                  <FaCalendar className="reservation-icon" />
                  <div>
                    <label className="fw-bold">Fecha</label>
                    <div>{r.fecha.split("T")[0]}</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaClock className="reservation-icon" />
                  <div>
                    <label className="fw-bold">Hora</label>
                    <div>{r.horaInicio}</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaUser className="reservation-icon" />
                  <div>
                    <label className="fw-bold">Barbero</label>
                    <div>{r.nombreBarbero}</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaCut className="reservation-icon" />
                  <div>
                    <label className="fw-bold">Servicio</label>
                    <div>{r.nombreServicio}</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaFile className="reservation-icon" />
                  <div>
                    <label className="fw-bold">Estado</label>
                    <div
                      className={
                        r.estado.nombre === "Cancelada"
                          ? "text-danger fw-bold"
                          : "text-success fw-bold"
                      }
                    >
                      {r.estado}
                    </div>
                  </div>
                </div>
               <button
  className={`btn ${
    r.estado === "CanceladaCliente"
      ? "btn-secondary"
      : "btn-danger"
  }`}
  onClick={() => {
    if (r.estado === "CanceladaCliente") {
      setMotivoVer(r.motivoCancelacion);
      setShowMotivoModal(true);
    } else {
      abrirModalCancelar(r);
    }
  }}
>
  {r.estado === "CanceladaCliente" ? "Cancelada" : "Cancelar"}
</button>
              </div>
            </div>
          ))
        )}
      </div>
 {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Cancelar reserva</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <div className="modal-body text-start">
                <p>Indique el motivo de la cancelación:</p>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Ej: No puedo asistir ese día"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Volver
                </button>
                <button
                  className="btn btn-danger"
                  onClick={confirmarCancelacion}
                >
                  Confirmar cancelación
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
{showMotivoModal && (
  <div className="modal fade show d-block">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">Reserva cancelada</h5>
          <button
            className="btn-close"
            onClick={() => setShowMotivoModal(false)}
          />
        </div>

        <div className="modal-body">
          <p>Motivo de cancelacion: {motivoVer}</p>
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={() => setShowMotivoModal(false)}
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default MisReservas;
