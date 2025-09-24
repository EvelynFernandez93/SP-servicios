import { useState } from 'react'
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'


import Inicio from "./Components/Inicio/Inicio"
import About from './Components/About/About'
import Proyectos from './Components/Proyectos/Proyectos'
import ItemDetail from './Components/ItemDetail/ItemDetail'

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
            <Route path="/proyecto/:id" element={<ItemDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      
      </div>
    </>
  )
}

export default App
