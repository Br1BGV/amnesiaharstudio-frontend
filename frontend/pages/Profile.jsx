import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const API = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    calle: "",
    numeroPuerta: "",
    ciudad: "",
    passwordActual: "",
    passwordNueva: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!userData || !token) return;

    const usuario = JSON.parse(userData);
    setUser(usuario);

    setFormData({
      nombreCompleto: `${usuario.nombre} ${usuario.apellido || ""}`,
      email: usuario.email || "",
      telefono: usuario.telefono || "",
      calle: usuario.calle || "",
      numeroPuerta: usuario.numeroPuerta || "",
      ciudad: usuario.ciudad || "",
      passwordActual: "",
      passwordNueva: "",
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    const partesNombre = formData.nombreCompleto.split(" ");
    const nombre = partesNombre[0] || "";
    const apellido = partesNombre.slice(1).join(" ") || "";

    const esCliente = user.rol === "Cliente";

    let dto;
    let url;
    // DTO que requiere la API
    if (esCliente) {
      // ===== CLIENTE =====
      dto = {
        nombre: nombre,
        apellido: apellido,
        email: formData.email,
        telefono: formData.telefono,
        passwordActual: formData.passwordActual,
        passwordNueva: formData.passwordNueva,
      };

      //  Validación correcta para detectar cambios
      const noCambioDatos =
        user.email === dto.email && user.telefono === dto.telefono;

      const noCambioPassword =
        !dto.passwordNueva || dto.passwordNueva.trim() === "";

      if (noCambioDatos && noCambioPassword) {
        toast.info("No realizaste ningún cambio.");
        setEditMode(false);
        setChangePassword(false);
        return;
      }

      url = `${API}/api/Clientes/${encodeURIComponent(user.email)}`;
    } else {
      dto = {
        nombre: nombre,
        apellido: apellido,
        email: formData.email,
        telefono: formData.telefono,
        calle: formData.calle,
        numeroPuerta: formData.numeroPuerta,
        ciudad: formData.ciudad,
        passwordActual: formData.passwordActual,
        passwordNueva: formData.passwordNueva,
      };

      //DETECTAR SI NO CAMBIÓ NADA
      const noCambioDatos =
        user.email === dto.email &&
        user.telefono === dto.telefono &&
        (user.calle || "") === dto.calle &&
        (user.numeroPuerta || "") === dto.numeroPuerta &&
        (user.ciudad || "") === dto.ciudad;

      const noCambioPassword =
        !dto.passwordNueva || dto.passwordNueva.trim() === "";

      if (noCambioDatos && noCambioPassword) {
        toast.info("No realizaste ningún cambio.");
        setEditMode(false);
        setChangePassword(false);
        return;
      }

      url = `${API}/api/Empleados/${encodeURIComponent(user.email)}`;
    }

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dto),
      });
      const data = await response.json();
      console.log(data.mensaje);
      if (!response.ok) {
        toast.error(data.mensaje || "Error al guardar los cambios");
        return;
      }

      // Actualizar usuario en localStorage
      const updatedUser = {
        ...user,
        nombre,
        apellido,
        email: dto.email,
        telefono: dto.telefono,
        ...(esCliente
          ? {}
          : {
              calle: dto.calle,
              numeroPuerta: dto.numeroPuerta,
              ciudad: dto.ciudad,
            }),
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      window.dispatchEvent(new Event("userChanged"));
      setUser(updatedUser);

      // Actualizar formulario automáticamente
      setFormData({
        nombreCompleto: `${updatedUser.nombre} ${updatedUser.apellido}`,
        email: updatedUser.email,
        telefono: updatedUser.telefono,
        calle: updatedUser.calle || "",
        numeroPuerta: updatedUser.numeroPuerta || "",
        ciudad: updatedUser.ciudad || "",
        passwordActual: "",
        passwordNueva: "",
      });

      setEditMode(false);
      setChangePassword(false);

      toast.success(data.mensaje);
    } catch (error) {
      toast.error("Error de conexión con el servidor");
    }
  };

  if (!user) return <p className="text-white">Cargando...</p>;
  const esCliente = user.rol === "Cliente";
  return (
    <div className="profile">
      <ToastContainer position="top-center" autoClose={1800} />
      <h2 className="fw-bold text-center mb-3">Mi Perfil</h2>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="profile-form p-4 rounded">
          <div className="text-center mb-4">
            <div className="position-relative d-inline-block">
              <FaUser className="page-icon mb-3" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="mb-3 text-start">
                <label className="fw-bold">Nombre Completo</label>
                <input
                  className="form-control"
                  value={formData.nombreCompleto}
                  disabled
                />
              </div>

              <div className="mb-3 text-start">
                <label className="fw-bold">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  className="form-control"
                  value={formData.telefono}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>

              {/*  Dirección solo para empleados/admin */}
              {!esCliente && (
                <>
                  <div className="mb-3 text-start">
                    <label className="fw-bold">Calle</label>
                    <input
                      type="text"
                      name="calle"
                      className="form-control"
                      value={formData.calle}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label className="fw-bold">Número de puerta</label>
                    <input
                      type="text"
                      name="numeroPuerta"
                      className="form-control"
                      value={formData.numeroPuerta}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label className="fw-bold">Ciudad</label>
                    <input
                      type="text"
                      name="ciudad"
                      className="form-control"
                      value={formData.ciudad}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="col-md-6">
              <div className="mb-3 text-start">
                <label className="fw-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              {!changePassword ? (
                <div className="mb-3 text-start">
                  <label className="fw-bold">Contraseña</label>
                  <button
                    className="btn btn-success w-100 fw-bold"
                    onClick={() => setChangePassword(true)}
                    disabled={!editMode}
                  >
                    {" "}
                    Modificar
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-3 text-start">
                    <label className="fw-bold">Contraseña Actual</label>
                    <input
                      type="password"
                      name="passwordActual"
                      className="form-control"
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="fw-bold">Contraseña Nueva</label>
                    <input
                      type="password"
                      name="passwordNueva"
                      className="form-control"
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {!editMode ? (
            <button
              className="btn btn-outline-light fw-bold w-100 mt-3"
              onClick={() => setEditMode(true)}
            >
              Editar Perfil
            </button>
          ) : (
            <div className="d-flex gap-3 mt-3">
              <button
                className="btn btn-danger w-50 fw-bold"
                onClick={() => {
                  setEditMode(false);
                  setChangePassword(false);
                }}
              >
                Cancelar
              </button>

              <button
                className="btn btn-success w-50 fw-bold"
                onClick={handleSave}
              >
                Confirmar Cambios
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
