import React, { Component } from 'react';

class ResenaHistorica extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (

      <main role="main" className="container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row">

            <h1 className="py-5 mx-auto">Reseña Historica</h1>
            <div className="col-12 mx-auto">
                <ul className="lead pb-5  text-left">
                  <li>(01) CARPETA YUTE CON SU GANCHO PLASTICO</li>

                  <li>3 FOTOS TAMAÑO 3 X 4 FONDO AZUL UNIFORME DE DIARIO</li>

                  <li>FOTOCOPIA DE REGISTRO CIVIL/ TARJETA DE IDENTIDAD/ CEDULA DE CIUDADANIA</li>


                  <li>FOTOCOPIA ENTIDAD PROMOTORA DE SALUD</li>

                  <li>INFORME ACADEMICO AÑOS ANTERIORES</li>

                  <li>PAZ Y SALVO</li>

                  <li>HOJA DE MATRICULA</li>
                </ul>
            </div>

            <div className="">

            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ResenaHistorica;
