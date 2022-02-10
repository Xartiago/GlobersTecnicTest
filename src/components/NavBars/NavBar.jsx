import { useState } from 'react'
/* Custom Hooks */
import { useModoNoct } from '../../hooks/useModoNoct'
/* Mock Data */
import { MenuItems } from './dataMock'
/* Components */
import { NavItems } from '../subcomponents/NavItems'
/* Icons */
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { MdOutlineMenuOpen, MdOutlineMenu } from 'react-icons/md'

export const NavBar = () => {
  /* El estado global del modo nocturno */
  const { ModoNoct, ModoNoctOff, ModoNoctOn } = useModoNoct()
  const [menu, setMenu] = useState(false) /* Este estado maneja el menu de mobiles */

  /* Este podria ser otro componente */
  /* Al usar Sass me permite modificar sus hijos con anidación asi que no añado clases */
  const Menu = (<ul>
    {MenuItems.map(item => {
      const { id, nombre } = item
      return <NavItems key={id} nombre={nombre} />
    })}
    {ModoNoct ? <BsFillSunFill className='pointer' size={24} onClick={() => ModoNoctOff()} color='white' />
      : <BsFillMoonFill className='pointer' size={24} onClick={() => ModoNoctOn()} />}
  </ul>)

  return (  
    <div className='navCont'>
      <div className='hambNav'>
        { /* Este es el controlador del menu (Abierto/Cerrado) */
          !menu ? <MdOutlineMenu size={34} color={ModoNoct ? 'white' : 'black'} onClick={() => setMenu(true)} />
            : <MdOutlineMenuOpen size={34} color={ModoNoct ? 'white' : 'black'} onClick={() => setMenu(false)} />
        }
      </div>
      {/* Se renderiza el menu dependiendo del estado del menu (abierto/cerrado) */}
      {menu ? <div className={`mobMenu ${ModoNoct ? 'noct' : 'normal'}`} >{Menu} </div> : null}
      <div className={`nav ${ModoNoct ? 'noct' : 'none'}`}>
        {Menu}
      </div>
    </div>
  )
}
