import EstadoPago from "../components/EstadoPago.jsx";

const PagoExitoso = () => (
  <EstadoPago
    estadoEsperadoId={2} // Confirmada
    mensajeOk="Pago confirmado ✅"
    mensajeDefault="Confirmando tu pago..."
  />
);

export default PagoExitoso;
