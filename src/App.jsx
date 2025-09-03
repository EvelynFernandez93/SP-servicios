import { useState } from 'react'

import './App.css'


import Inicio from "./Components/Inicio/Inicio"
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='contenedor-general'>
      <About />
      </div>
    </>
  )
}

export default App
