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
            <div className='item-video'>

            </div>
            <div className='item-contenedor-boton'>
                <p className='boton-primario'>Volver</p>
            </div>


        </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
