import React, { Component } from 'react';

class Noticias extends Component {

<<<<<<< HEAD
=======
  componentDidMount() {
    window.scrollTo(0, 0);
  }

>>>>>>> edda5d60d1831ef84290777a78bc39fed87ba254
  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid mb-0">

        <div className="row text-left noticias">

          <div className="col-1"></div>
          <div className="col-11 py-5">
            <h1>Noticias</h1>
            <hr />
          </div>
          <div className="col-1"></div>
          <div className="col-11 mx-auto">

            <ul>
              <li>(01) CARPETA YUTE CON SU GANCHO PLASTICO</li>

              <li>3 FOTOS TAMAÑO 3 X 4 FONDO AZUL UNIFORME DE DIARIO</li>

              <li>FOTOCOPIA DE REGISTRO CIVIL/ TARJETA DE IDENTIDAD/ CEDULA DE CIUDADANIA</li>


              <li>FOTOCOPIA ENTIDAD PROMOTORA DE SALUD</li>

              <li>INFORME ACADEMICO AÑOS ANTERIORES</li>

              <li>PAZ Y SALVO</li>

              <li>HOJA DE MATRICULA</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Noticias;
