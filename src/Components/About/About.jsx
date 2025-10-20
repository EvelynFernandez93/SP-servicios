import React from 'react'
import "../About/About.css"
import Navbar from '../Navbar/Navbar'
import Presentacion from "../Presentacion/Presentacion"
import Informacion from '../Informacion/Informacion'
import Footer from "../Footer/Footer"
import Carrousel from '../Carrousel/Carrousel'
import Videos from '../Videos/Videos'
const About = () => {
  return (
    <div className='about-contenedor'>
      <Navbar />
      <Presentacion />
      <Informacion />
      <Carrousel />
      <Videos videoUrl="https://www.instagram.com/p/DPzXXpWgdQm/" />
    </div>
  )
}

export default About
