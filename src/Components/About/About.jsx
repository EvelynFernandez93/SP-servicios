import React from 'react'
import "../About/About.css"
import Navbar from '../Navbar/Navbar'
import Presentacion from "../Presentacion/Presentacion"
import Informacion from '../Informacion/Informacion'
import Footer from "../Footer/Footer"
const About = () => {
  return (
    <div className='about-contenedor'>
      <Navbar />
      <Presentacion />
      <Informacion />
    </div>
  )
}

export default About
