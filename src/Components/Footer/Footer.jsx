import React from 'react'
import "../Footer/Footer.css"
import Instagram from '../../assets/Instagram'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/Facebook'
const Footer = () => {
  return (
    <div className='footer-contenedor'>
      <div className='footer-contenido'>
        <div className='footer-titulos'>
            <div className='footer-titulo'>
                <p>SP - servicios para la construcción</p>
            </div>
            <div className='footer-descripcion'>
                <p>Tu proyecto en nuestras manos</p>
            </div>
        </div>
      </div>
      <div className='footer-contenido2'>
        <div className='footer-texto'>
            <p>Seguinos en nuestras redes</p>
        </div>
        <div className='footer-redes'>
           <ul className='iconos'>
            <li ><Link
                className="icono"
                to="https://www.instagram.com/entrecerrosestudiocreativo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </Link></li>
            <li><Link
                className="icono"
                to="https://www.facebook.com/profile.php?id=61578417668247"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </Link></li>
           </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
