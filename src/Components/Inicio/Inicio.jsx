import Footer from "../Footer/Footer"
import Introduccion from "../Introduccion/Introduccion"
import Navbar from "../Navbar/Navbar"
import Presentacion from "../Presentacion/Presentacion"
import Servicios from "../Servicios/Servicios"
import "../Inicio/Inicio.css"

const Inicio = () => {
  return (
    <div className="inicio-contenedor">
      <Navbar />
      <Presentacion />
      <Introduccion />
      <Servicios />
      <Footer />
    </div>
  )
}

export default Inicio
