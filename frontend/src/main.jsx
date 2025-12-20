import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY);
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="711566136473-5kcm74ai1lnc0dmdqthpcf9rd8uq3e56.apps.googleusercontent.com">
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>

  </GoogleOAuthProvider>
  
);
