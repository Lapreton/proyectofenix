import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import fenix from '../components/assets/Fenix.png'

class Error extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
<<<<<<< HEAD
=======

>>>>>>> edda5d60d1831ef84290777a78bc39fed87ba254
  render() {
    return (


      <div className="error py-5">

        <div className="row py-5 mx-auto">

          <div className="col-2"></div>

          <div className="col-4 py-5">

            <div className="row">

              <div className="col-12 text-left">
                <h2>UPS! Algo ha salido mal :(</h2>
              </div>

              <div className="col-12 text-left">
                <p>
                  ERROR 404
                  <br />
                  PAGINA NO ENCONTRADA!
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <NavLink to="/"><img src={fenix} alt="fenix imagen Error" title="Regresar al inicio"></img></NavLink>
          </div>

          <div className="col-2"></div>

          <div className="col-2 py-5"></div>

          <div className="col-10 py-5 text-left">
            <h6>No se encontró lo que buscas, puede que la dirección solicitada no exista o no se ha escrito correctamente.</h6>
            <p>El fénix te llevará al inicio</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
