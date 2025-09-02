import  '../Navbar/Navbar.css'


const Navbar = () => {
  return (
    <div className='ubicacion-navbar'>
      <div className="navbar">
        <div  >
          <img src="/logo1.png" alt="Logo" />
        </div>
        <div className="titulos" >
          <div >
            <p className="boton-primario">Inicio</p>
          </div>
          <div >
            <p className="boton-primario">Sobre Nosotros</p>
          </div>
          <div >
            <p className="boton-primario">Proyectos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
