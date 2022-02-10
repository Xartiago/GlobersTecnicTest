import { useContext } from "react"
import { TestContext } from "../context/TestProvider"

/* Este custom hook nos permite cambiar el objeto formulario del estado global */
export const useTitleGlobState = () => {
  /* aca traemos nuevamente el contexto del estado global */
  const { state, setGlobalState } = useContext(TestContext)

  const actualTitle = state.Titulo /* Obtiene el titulo del estado global */
  const addNewTitle = (newTitle) => setGlobalState({ ...state, Titulo: newTitle }) /* Esta funcion actualiza el titulo del estado global */

  return {
    actualTitle,
    addNewTitle
  }
}