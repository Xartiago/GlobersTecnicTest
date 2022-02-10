import { createContext, useState } from "react";

/* Creamos un Conexto Global para manejar estados desde diferentes componentes */
export const TestContext = createContext()

/* El estado Inicial de la Aplicación */
/* Que tambien podria manejarse como un estado */
const GlobalState = {
  ModoNoct: false,
  Titulo: '',
  Formulario: {}
}

/* Este va ser el componente proveedor del estado global de la aplicación */
export const TestProvider = ({ children }) => {

  /* Usamos useState para declarlo como un estado */
  const [state, setGlobalState] = useState(GlobalState)

  return (
    <TestContext.Provider value={{ state, setGlobalState}}>
      {children}
    </TestContext.Provider>
  )
}
