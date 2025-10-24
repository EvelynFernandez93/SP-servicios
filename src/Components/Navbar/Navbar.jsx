
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="navbar navbar-contenedor">
      <div className="logo">
        <img src="/logo1.png" alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="24" height="24" 
             viewBox="0 0 18 12" 
             fill="none">
          <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" 
                fill="var(--Foundation-Primario-primario-500, #FCF5BC)"/>
        </svg>
      </div>
      <div className={`titulos ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="boton-primario" onClick={toggleMenu}>Inicio</Link>
        <Link to="/about" className="boton-primario" onClick={toggleMenu}>Sobre mi</Link>
        <Link to="/projects" className="boton-primario" onClick={toggleMenu}>Proyectos</Link>
      </div>
    </div>
  )
}

export default Navbar
