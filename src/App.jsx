import { useState } from 'react'
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'


import Inicio from "./Components/Inicio/Inicio"
import About from './Components/About/About'
import Proyectos from './Components/Proyectos/Proyectos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='contenedor-general'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Proyectos />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      
      </div>
    </>
  )
}

export default App
