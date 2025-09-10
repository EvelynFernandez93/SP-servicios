import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Proyectos/Proyectos.css"
import ProyectosCard from '../ProyectosCard/ProyectosCard'


const Proyectos = () => {
  return (
    <div className="proyectos-contenedor">
     <Navbar /> 
     <ProyectosCard/>
    </div>

  )
}

export default Proyectos
