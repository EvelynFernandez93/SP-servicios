import  '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-contenedor">
        <div  >
          <img src="/logo1.png" alt="Logo" />
        </div>
        <div className="titulos" >
          <div >
            <Link to="/" className='boton-primario'>Inicio</Link>
          </div>
          <div >
            <Link to="/about" className='boton-primario'>Sobre mi</Link>
          </div>
          <div >
            <Link to="/projects" className='boton-primario'>Proyectos</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
