import { useTitleGlobState } from '../../hooks/useTitleGlobState'

export const NavItems = ({ nombre }) => {
  const { addNewTitle, actualTitle } = useTitleGlobState()
  return (
    <li className={actualTitle === nombre ? 'active' : undefined} onClick={() => addNewTitle(nombre) }>
      {nombre}
    </li>
  )
}
