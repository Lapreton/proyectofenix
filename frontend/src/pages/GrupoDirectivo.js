import React, { Component } from 'react';
import director from "../components/assets/director.jpg";
import coordinador from "../components/assets/coordinador.jpg";
import logistico from "../components/assets/director.jpg";

class GrupoDirectivo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row grupoDirectivo">

            <div className="col-12 py-5 mx-auto">
              <h1>Grupo Directivo</h1>
              <hr />
            </div>

            <div className="col-12 py-5">
              <div className="row">

                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <img src={director} alt="director cefen equipo de trabajo"></img>
                    </div>

                    <div className="col-12 pt-3">
                      <h4><b>Director</b></h4>
                    </div>
                    <div className="col-12">
                      <p>Jorge Enrique Morris Cardenas</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-6 my-auto">
                  <p><i>"Alguna frase ocurrente del señor morris va aqui"</i></p>
                </div>
              </div>
            </div>

            <div className="col-12 py-5">
              <div className="row">

                <div className="col-sm-12 col-lg-6 my-auto">
                  <p><i>"Alguna frase ocurrente del señor morris va aqui"</i></p>
                </div>

                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <img src={coordinador} alt="coordinador cefen equipo de trabajo"></img>
                    </div>

                    <div className="col-12 pt-3">
                      <h4><b>Coordinador Académico</b></h4>
                    </div>
                    <div className="col-12">
                      <p>Yamile Ascanio Ascanio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 py-5">
              <div className="row">

                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <img src={logistico} alt="logistico cefen equipo de trabajo"></img>
                    </div>

                    <div className="col-12 pt-3">
                      <h4><b>Logistico</b></h4>
                    </div>
                    <div className="col-12">
                      <p>Nombre de la persona de Logistico</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-6 my-auto">
                  <p><i>"Alguna frase ocurrente del señor morris va aqui"</i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    );
  }
}
export default GrupoDirectivo;