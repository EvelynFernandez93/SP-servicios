import Introduccion from "../Introduccion/Introduccion"
import Navbar from "../Navbar/Navbar"
import Presentacion from "../Presentacion/Presentacion"
import Servicios from "../Servicios/Servicios"


const Inicio = () => {
  return (
    <div>
      <Navbar />
      <Presentacion />
      <Introduccion />
      <Servicios />
    </div>
  )
}

export default Inicio
