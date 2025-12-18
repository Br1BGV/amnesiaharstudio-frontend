import EstadoPago from "../components/EstadoPago.jsx";

const PagoPendiente = () => (
  <EstadoPago
    esperado="PendientePago"
    mensajeOk="Tu pago está pendiente ⏳"
    mensajeDefault="Esperando confirmación del pago..."
  />
);

export default PagoPendiente;
