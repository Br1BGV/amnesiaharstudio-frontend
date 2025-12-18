import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MisReservas from "../pages/MisReservas";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import "./App.css";
import Services from "../pages/Services";
import Reservation from "../pages/Reservation";
import PagoExitoso from "../pages/PagoExitoso";
import PagoPendiente from "../pages/PagoPendiente";
import PagoError from "../pages/PagoError";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/pago-exitoso/:reservaId" element={<PagoExitoso/>} />
        <Route path="/pago-pendiente/:reservaId" element={<PagoPendiente />} />
        <Route path="/pago-error/:reservaId" element={<PagoError />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
