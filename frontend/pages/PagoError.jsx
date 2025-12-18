import EstadoPago from "../components/EstadoPago.jsx";

const PagoError = () => (
  <EstadoPago
    esperado="CanceladaCliente"
    mensajeOk="El pago fue rechazado ❌"
    mensajeDefault="El pago no pudo completarse."
  />
);

export default PagoError;
