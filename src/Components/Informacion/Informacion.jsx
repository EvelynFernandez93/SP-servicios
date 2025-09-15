import React from 'react'
import "./Informacion.css";

const Informacion = () => {
  return (
    <div className='informacion-contenedor'>
      <div className='primer-contenedor'>
        <div className='primer-pregunta'>
            <p>¿Quienes somos?</p>
        </div>
        <div className='primer-respuesta'>
            <p>Somos un grupo de profesionales que busca mostrar su trabajo para poder llegar a más personas, darles la tranquilidad de que están accediendo a un servicio de confianza. </p>
        </div>
      </div>{/* fin del primer contenedor */}
      <div className='segundo-contenedor'>
        <div >
            <img src='/Informacion1.png' className='img-segundo-contenedor'></img>
        </div>
        <div className='segunto-contenedor-informacion'>
        <div className='segunda-pregunta'>
            <p>¿Por qué elegirnos?</p>
        </div>
        <div className='segunda-respuesta'>
            <p>El compromismo, eficiencia y responsabilidad de nuestro grupo de trabajadores autónomos, sumado al asesoramiento de Sonia Pirrera nos permite desarrollar trabajos de forma correcta y  respetando las normas vijentes.</p>
        </div>

       </div>
       
       </div>
    </div>
  )
}

export default Informacion
