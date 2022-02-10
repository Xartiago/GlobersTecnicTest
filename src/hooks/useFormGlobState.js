import { useContext } from "react"
import { TestContext } from "../context/TestProvider"

/* Este custom hook nos permite cambiar el objeto formulario del estado global */
export const useFormGlobState = () => {
  /* aca traemos nuevamente el contexto del estado global */
  const { state, setGlobalState } = useContext(TestContext)

  const formData = state.Formulario /* Aca la propiedad formulario del estado global */
  const setFormData = (newData) => setGlobalState({ ...state, Formulario = newData }) /* Aca seteamos el Formulario con el nuevo objeto que recibe por parametros */

  return {
    formData,
    setFormData
  }
}