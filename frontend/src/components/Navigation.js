import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import escudo from '../icon/escudo.png';


class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navegacion sticky-top" id="btnTopId">

        <NavLink className="navbar-brand" to="/" title="Ir a inicio">
          <img src={escudo} className="App-logo mt-auto" alt="logo" />
          <span className="mx-auto">Centro Educativo Fenix</span>
        </NavLink>

        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#Navbarboton" aria-controls="Navbarboton" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="Navbarboton">
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-link" to="/Admisiones">Admisiones</NavLink>
            <div className="dropdown">
              <p className="nav-link nav-item dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                Coordinación Académica
              </p>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/GrupoDirectivo"><p>Grupo Directivo</p></NavLink><hr />
                <NavLink className="dropdown-item" to="/SistemaEvaluacion"><p>Sistema de Evaluación</p></NavLink><hr />
                <NavLink className="dropdown-item" to="/Cronograma"><p>Cronograma</p></NavLink><hr />
                <NavLink className="dropdown-item" to="/CalendarioAcademico"><p>Calendario Académico</p></NavLink>
              </div>
            </div>
            <NavLink className="nav-link" to="/Galeria">Galería</NavLink>
            <div className="dropdown">
              <p className="nav-link nav-item dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                Acerca de Nosotros
              </p>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/MisionVision"><p>Misión y Visión</p></NavLink><hr />
                <NavLink className="dropdown-item" to="/SimbolosInstitucionales"><p>Símbolos Institucionales</p></NavLink><hr />
                <NavLink className="dropdown-item" to="/ResenaHistorica"><p>Reseña Histórica</p></NavLink><hr />
                <NavLink className="dropdown-item" to="/FundamentosInstitucionales"><p>Fundamentos Institucionales</p></NavLink><hr />
                <NavLink className="dropdown-item" to="/Contactanos"><p>Contáctanos</p></NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
