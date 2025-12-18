import EstadoPago from "../components/EstadoPago.jsx";

const PagoExitoso = () => (
  <EstadoPago
    esperado="Pagada"
    mensajeOk="Pago confirmado ✅"
    mensajeDefault="Confirmando tu pago..."
  />
);

export default PagoExitoso;
