import { useContext } from "react";
import { TestContext } from "../context/TestProvider";

/* Este Hook nos permite enviar 2 funciones que controlan el modo oscuroF */
export const useModoNoct = () => {
  /* Aca nos traemos el contexto para usarlo */
  const { state, setGlobalState } = useContext(TestContext)

  const ModoNoct = state.ModoNoct
  const ModoNoctOn = () => setGlobalState({ ...state, ModoNoct: true }) /* Aca seteamos el valor para activar el modo nocturno en encendido */
  const ModoNoctOff = () => setGlobalState({ ...state, ModoNoct: false }) /* Aca hacemos lo mismo pero para apagarlo */

  return {
    ModoNoct,
    ModoNoctOn,
    ModoNoctOff
  }
}
