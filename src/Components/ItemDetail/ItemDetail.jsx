/* import React from 'react'
import '../ItemDetail/ItemDetail.css'
const ItemDetail = () => {
  return (
    <div>
      
    </div>
  )
}

export default ItemDetail
 */
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import proyectosData from '../../data/data.json';
import '../ItemDetail/ItemDetail.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Videos from '../Videos/Videos';
const ItemDetail = () => {
  const { id } = useParams();
  const proyecto = proyectosData.find(p => p.id === parseInt(id));

  if (!proyecto) return <p>Proyecto no encontrado</p>;

  return (
    <div className="item-detail-container">
        <Navbar />
      <div>
        <div className='item-contenedor'>
        <div className='item-portada'><img src={proyecto.img} alt={proyecto.nombre} className="item-detail-img"/></div>
        <div className='item-informacion'>
            <h2 className='item-nombre'>{proyecto.nombre}</h2>
            <p className='item-intro'>{proyecto.introduccion}</p>
            <p className='item-descripcion'>Descripción de "{proyecto.descripcion}"</p>
            <p className='item-informacion'>{proyecto.informacion}</p>
            <div /* className='item-video' */>
            <Videos videoId={proyecto.video}  // ID del video de YouTube

            thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" />

            </div>
            <div className='item-contenedor-boton'>
                <Link to="/projects" className='boton-primario'>Volver</Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
