/* import React from 'react'
import "../ProyectosCard/ProyectosCard.css"
const ProyectosCard = ({proyecto}) => {
  return (
    <div className='pc-card'>
      <img className='pc-img'src={proyecto.img} alt= {proyecto.nombre}></img>
      <div className='pc-informacion'>
        <div className='pc-nombre-titulo'>
            <p>{proyecto.nombre}</p>
        </div>
        <div className='pc-nombre-subtitulo'>
            <p>{proyecto.tipo}</p>
        </div>
        <div >
            <p className='pc-descripcion'>{proyecto.descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default ProyectosCard */
import React from 'react';
import "../ProyectosCard/ProyectosCard.css";
import { Link } from 'react-router-dom';

const ProyectosCard = ({ proyecto }) => {
  return (
    <Link to={`/proyecto/${proyecto.id}`} style={{ textDecoration: 'none' }}>
      <div className='pc-card'>
        <img className='pc-img' src={proyecto.img} alt={proyecto.nombre}></img>
        <div className='pc-informacion'>
          <div className='pc-nombre-titulo'>
              <p>{proyecto.nombre}</p>
          </div>
          <div className='pc-nombre-subtitulo'>
              <p>{proyecto.tipo}</p>
          </div>
          <div>
              <p className='pc-descripcion'>{proyecto.descripcion}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProyectosCard;
