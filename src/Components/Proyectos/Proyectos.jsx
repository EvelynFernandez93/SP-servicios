import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../Proyectos/Proyectos.css";
import ProyectosCard from '../ProyectosCard/ProyectosCard';
import proyectosData from '../../data/data.json';
import Footer from '../Footer/Footer';

function Proyectos() {
  return (
    <div className="proyectos-contenedor">
      <Navbar />
      <div className="proyectos-contenido">
        <div className=''>
        <div className="proyectos-organizacion todos-los-proyectos">
          {proyectosData.map((proyecto) => (
            <ProyectosCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Proyectos;
