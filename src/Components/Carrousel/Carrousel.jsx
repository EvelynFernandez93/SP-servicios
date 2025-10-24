import React from 'react'
import "../Carrousel/Carrousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Carrousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Carousel1.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='carousel-titulo'>MISIÓN</h5>
        <h6 className='carousel-subtitulo'>Brindar un servicio que garantice calidad</h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/Carousel2.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='carousel-titulo'>VISIÓN</h5>
        <h6 className='carousel-subtitulo'>Realizar proyectos de gran envergadura</h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/Carousel3.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h6 className='carousel-subtitulo'>Pero sobre todo es ser simbolos de calidad y confianza</h6>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carrousel
