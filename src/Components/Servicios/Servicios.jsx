import React from 'react'
import "../Servicios/Servicios.css"
const Servicios = () => {
  return (
    <div className='servicios-contenedor'>
      <div>
        <p className='servicios-titulo'>Servicios</p>
      </div>
      <div className='contenedor-cards'>
        <div className='card'>
            <img className='card-img' src='/Card1.png'></img>
            <p className='card-titulo'>Coaching</p>
            <p className='card-texto '>Asesoramiento profesional para alumnos, gasistas matriculados, arquitectos, entre otros.</p>   
        </div>
        <div className='card'>
            <img className='card-img' src='/Card2.png'></img>
            <p className='card-titulo'>Planos</p>
            <p className='card-texto '>Te ayudo a idear tu proyecto para lograr un diseño funcional que se adapte a tus necesidades.</p>   
        </div>
        <div className='card'>
            <img className='card-img' src='/Card3.png'></img>
            <p className='card-titulo'>Gas</p>
            <p className='card-texto '>Incluye reparaciones, instalación de cañerías, tramitación de medidor y control de calidad..</p>   
        </div>
        
      </div>
      <div className='presupuesto-contenedor'>
        <div><p className='presupuesto-texto'>Pedí tu presupuesto yá</p></div>
        <div><p className="boton-terciario">Consultar</p></div>
        

      </div>
    </div>
  )
}

export default Servicios
