import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Proyectos/Proyectos.css"
import ProyectosCard from '../ProyectosCard/ProyectosCard'
import proyectosData from '../../data/data.json'


function Proyectos() {
  return (
    <div className="proyectos-contenedor" >
      <Navbar />
      <div className="todos-los-proyectos proyectos-organizacion">
       {proyectosData.map((proyecto) => (
          <ProyectosCard key={proyecto.id} proyecto={proyecto} />
        ))}
      
      </div>
      
    </div>

  )
}

export default Proyectos
