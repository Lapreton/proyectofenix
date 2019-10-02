import React, { Component } from 'react';

import imagen1 from './assets/Imagen1.jpg';
import imagen2 from './assets/Imagen2.jpg';
import imagen3 from './assets/Imagen3.jpg';
import imagen4 from './assets/Imagen4.jpg';
import imagen5 from './assets/Imagen5.jpg';
import imagen6 from './assets/Imagen6.jpg';


class Carousel extends Component {
  render() {

    return (

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
     
          
          
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src={imagen1} alt="First slide"></img>
              </div>
              <div className="carousel-item">
                <img className="w-100" src={imagen2} alt="Second slide"></img>
              </div>
              <div className="carousel-item">
                <img className="w-100" src={imagen3} alt="Third slide"></img>
              </div>
              <div className="carousel-item">
                <img className="w-100" src={imagen4} alt="Fourth slide"></img>
              </div>
              <div className="carousel-item">
                <img className="w-100" src={imagen5} alt="Fifth slide"></img>
              </div>
              <div className="carousel-item">
                <img className="w-100" src={imagen6} alt="Sixth slide"></img>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
          </div>
          
    );
  }
}

export default Carousel;
