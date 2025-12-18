import EstadoPago from "../components/EstadoPago.jsx";

const PagoPendiente = () => (
  <EstadoPago
    estadoEsperadoId={1} // Pendiente
    mensajeOk="Tu pago está pendiente ⏳"
    mensajeDefault="Esperando confirmación del pago..."
  />
);

export default PagoPendiente;
