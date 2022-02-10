import { useState } from "react"
/* Custom Hooks */
import { useModoNoct } from "../../hooks/useModoNoct"
import { useTitleGlobState } from "../../hooks/useTitleGlobState"
/* Components */
import { Modal } from '../subcomponents/Modal'
/* Icons */
import { AiOutlineCheckCircle } from 'react-icons/ai'


export const Form = () => {
  const { ModoNoct } = useModoNoct()
  const { actualTitle } = useTitleGlobState()
  /* Regexs */
  const EmailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: 25
  })
  const [modal, setModal] = useState(false)
  /* Manejador de errores */
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorTelefono, setErrorTelefono] = useState(false)


  /* Cambios de cada propiedad del formulario */
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    /* Aca validamos todos los campos del formulario */ 
    /* Primero que el nombre sea mayor a 10, el email cumpla con la expresion regular y el celular sea igual a 10 digitos */
    if (form.nombre.length > 10 && EmailRegex.test(form.email) && form.telefono.length === 10 && actualTitle) {
      console.log(form)
      setModal(true)
      setForm({
        nombre: '',
        email: '',
        telefono: '',
        edad: 25
      })
      setTimeout(() => {
        setModal(false)
      }, 5000);
    }
    /* Aca empezamos a manejar errores */
    form.nombre < 10 ? setErrorName(true) : setErrorName(false)
    !EmailRegex.test(form.email) ? setErrorEmail(true) : setErrorEmail(false)
    form.telefono.length > 10 || form.telefono.length < 10 ? setErrorTelefono(true) : setErrorTelefono(false)
  }

  return (
    <div className={`formCont ${ModoNoct ? 'formContNoct' : 'normal'}`}>
      {modal && <Modal
        desc='Tu información fue enviada con exito, estaremos en contacto contigo.'
        icon={<AiOutlineCheckCircle  size={40} color={'#bdecb6'} />}
      />}
      <div className={`form ${modal && 'blur'}`}>
        <h2>Hola bienvenido sabemos que quieres viajar en {actualTitle}</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Nombre */}
          <label>
            Nombre {errorName ? <span>Ingresa tu nombre completo</span> : ''}
            <input type='text' name='nombre' value={form.nombre} onChange={handleChange} placeholder='Nombre' />
          </label>
          {/* Email o correo */}
          <label>
            E-mail {errorEmail ? <span>Ingresa un correo valido</span> : ''}
            <input type='text' name='email' value={form.email} onChange={handleChange} placeholder='E-mail' />
          </label>
          {/* Telefono */}
          <label>
            Telefono {errorTelefono ? <span>Ingresa un telefono valido</span> : ''}
            <input type='text' name='telefono' value={form.telefono} onChange={handleChange} placeholder='Telefono' />
          </label>
          {/* Edad */}
          <label>
            Edad: {form.edad}
            <input type='range' min={18} max={100} name='edad' value={form.edad} onChange={handleChange} />
          </label>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}
