import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
/* React Context */
/* El contexto global (Un estado) */
import { TestProvider } from './context/TestProvider'

ReactDOM.render(
  <React.StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
