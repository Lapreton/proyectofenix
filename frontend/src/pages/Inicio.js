import React, { Component } from 'react';
import Carousel from '../components/Carousel.js';
import Noticias from './Noticias.js';
class Inicio extends Component {

  /* 
  *  Recuerda que todos los componentes de tipo clase o statefull tienen un ciclo de vida;
  *  por tal motivo es necesario hacer uso del metodo "componentDidMount" para que cuando 
  *  el componente cargue podamos "reiniciar" el scroll.
  * 
  *  https://developer.mozilla.org/es/docs/Web/API/Window/scrollTo
  */ 

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <div className="inicio">

        <Carousel />

        <div className="lead py-5">

          <div className="col-12 py-5">
            <h1>¿Quienes somos?</h1>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-2 aside-l"></div>
              <div className="col-8 text-left">
                <p>
                  Somos una institución  que inició sus labores en 2013 impartiendo una educación basada en valores.
                  Partimos del derecho donde cada mujer, hombre, joven, niño o niña tienen el derecho a la educación,
                  capacitación e información, enfocándonos en desarrollar jóvenes con educación elemental y básica.
                </p>
              </div>
              <div className="col-2 aside-d"></div>
            </div>
          </div>
        </div>

        <Noticias />
      </div>
    );
  }
}

export default Inicio;
