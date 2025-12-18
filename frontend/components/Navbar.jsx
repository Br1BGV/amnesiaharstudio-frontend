import { useEffect, useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../img/AmnesiaFooterTransparente.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleUserChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("userChanged", handleUserChange);

    return () => {
      window.removeEventListener("userChanged", handleUserChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userChanged"));
    navigate("/");
    closeAllMenus();
  };

  const closeAllMenus = () => {
    setShowMenu(false);
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container">
          {/* LOGO */}
          <Link to="/" className="navbar-logo d-flex align-items-center">
            <img src={logo} alt="Amnesia Hair Studio" width="100" />
          </Link>

          {/* TOGGLER MOBILE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={closeAllMenus}>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/aboutus"
                  onClick={closeAllMenus}
                >
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/services"
                  onClick={closeAllMenus}
                >
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/reserve"
                  onClick={closeAllMenus}
                >
                  Reservar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/courses"
                  onClick={closeAllMenus}
                >
                  Cursos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/gallery"
                  onClick={closeAllMenus}
                >
                  Galería
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={closeAllMenus}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>

            {/* BOTÓN LOGIN / PERFIL */}
            <div className="d-flex align-items-center">
              {user ? (
                <div className="position-relative">
                  {/* Ícono de perfil */}
                  <button
                    className="btn btn-outline-light btn-profile p-2"
                    onClick={() => setShowMenu(!showMenu)}
                    style={{ fontSize: "1.5rem" }}
                  >
                    <FaUserCircle />
                  </button>

                  {/* Menú desplegable */}
                  {showMenu && (
                    <div
                      className="profile-menu position-absolute end-0 mt-2 p-3 rounded shadow-sm"
                      style={{
                        backgroundColor: "#111",
                        border: "1px solid #333",
                        zIndex: 1000,
                        width: "180px",
                      }}
                    >
                      <Link
                        to="/perfil"
                        className="dropdown-item text-white text-decoration-none mb-2"
                        onClick={closeAllMenus}
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        to="/mis-reservas"
                        className="dropdown-item text-white text-decoration-none mb-2"
                        onClick={closeAllMenus}
                      >
                        Mis Reservas
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="dropdown-item text-danger fw-semibold border-0 bg-transparent p-0"
                      >
                        <FaSignOutAlt className="me-2" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {location.pathname === "/login" ? (
                    <Link
                      to="/register"
                      className="btn btn-outline-dark fw-semibold"
                      onClick={closeAllMenus}
                    >
                      Registrarse
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="btn btn-outline-dark fw-semibold"
                      onClick={closeAllMenus}
                    >
                      <FaSignInAlt /> Ingresar
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
