import React from 'react'
/* Components */
import { NavBar } from './NavBars/NavBar'
/* Global Styles */
import '../styles/app.scss'
import { Form } from './Form/Form'

export const App = () => {
  return (
    <div className='appCont'>
      <NavBar />
      <Form />
    </div>
  )
}
