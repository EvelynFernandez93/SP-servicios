import React from 'react'
import "../Informacion/Informacion.css"

const Informacion = () => {
  return (
    <div className='informacion-contenedor'>
      <div>
        <p className='informacion-titulo'>Conócenos</p>
      </div>

      <div className='contenedor-cards'>
        <div className='card-informacion'>
          <p className='card-titulo-informacion'>¿Quiénes somos?</p>
          <p className='card-texto-informacion'>
            Somos un grupo de profesionales que busca mostrar su trabajo para poder llegar a más personas, darles la tranquilidad de que están accediendo a un servicio de confianza.
          </p>
        </div>

        <div className='card-informacion'>
          <p className='card-titulo-informacion'>¿Por qué elegirnos?</p>
          <p className='card-texto-informacion'>
            El compromiso, eficiencia y responsabilidad de nuestro grupo de trabajadores autónomos, sumado al asesoramiento de Sonia Pirrera nos permite desarrollar trabajos de forma correcta y respetando las normas vigentes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Informacion
