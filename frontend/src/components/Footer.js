import React, { Component } from 'react';
import facebook from '../icon/facebook.svg';
import twitter from '../icon/twitter.svg';
import { NavLink } from 'react-router-dom';
//import gmail from '../icon/gmail.svg';
//import phone from '../icon/phone.svg';
//import map from '../icon/map.svg';
//import Maps from './Maps.js';
import manual from '../content/public/docs/Manual.pdf'
import escudo from '../icon/escudo.png';

class Footer extends Component {
  render() {
    return (

      <footer className="footer">

        <div className="container-fluid py-5">
          <div className="row vdivide">

            <div className="col-12  col-sm-12 col-md-6 col-lg-4">
              <img className="img-fluid w-50" src={escudo} alt="img escudo footer" />
              <p>
                <i>"FORMANDO EN VALORES PARA LA NUEVA SOCIEDAD"</i>
              </p>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-left">
              <a className="nav-link" href={manual} target="_blank" rel="noopener noreferrer">Reglamento Estudiantil</a>
              <NavLink className="nav-link" to="/PreguntasFrecuentes">Preguntas Frecuentes</NavLink>
              <NavLink className="nav-link" to="/Glosario">Glosario</NavLink>
              <NavLink className="nav-link" to="/Contactanos">Ubicación y medios de contacto</NavLink>
              <NavLink className="nav-link" to="/CalendarioAcademico">Calendario Académico</NavLink>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <div className="row mapa">
                <div className="col-11">

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-1 py-2 bg-dark">
          <div className="container">
            <div className="row text-center">

              <div className="col-sm-12 col-md-10">
                &copy; 2019 Director y personal de Centro Educativo Fenix
              </div>

              <div className="col-sm-12 col-md-2">
                <a href="https://www.facebook.com/Centroeducativo-Fenix-Cefen-883226068506461/" target="_blank" rel="noopener noreferrer"><img className="iconfooter mx-3" src={facebook} alt="img facebook footer"></img></a>
                <a href="https://www.facebook.com/Centroeducativo-Fenix-Cefen-883226068506461/" target="_blank" rel="noopener noreferrer"><img className="iconfooter" src={twitter} alt="img twitter footer"></img></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;