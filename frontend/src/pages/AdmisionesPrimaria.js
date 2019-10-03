import React, { Component } from 'react';
import BtnSubir from '../components/btnSubir';

class AdmisionesPrimaria extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <main role="main" className="container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row">

            <h1 className="py-5 mx-auto">Requisitos Admisión Primaria</h1>
            <div className="col-12 mx-auto">
              <div className="lead pb-5 text-left">
                <ul>
                  <p className="lead pb-5  text-left">

                    <li>Fotocopia de Registro Civil (Hasta los 6 años).</li>
                    <li>Fotocopia de Tarjeta de Identidad (A partir de 7 años) </li>
                    <li>Tres (3) fotos tamaño 3x4 (Actualizada).</li>
                    <li>Fotocopia de certificado médico del alumno.</li>
                    <li>Fotocopia del carnet o certificado de vacunación (Grado primero y segundo).</li>
                    <li>Boletín original del último grado cursado.</li>
                    <li>Paz y salvo de la institución de procedencia.</li>
                    <li>Certificado de la liberación del SIMAT de la institución de procedencia.</li>
                    <li>Fotocopia de La cédula de los padres.</li>
                    <li>Copia del observador del alumno.</li>
                    <li>Carpeta con gancho tamaño oficio de cartón.</li>
                  </p>
                </ul>
              </div>
              <hr />
            </div>

            <h1 className="py-5 mx-auto">Útiles Escolares</h1>

            <div className="col-12 mx-auto">
              <div className="lead pb-5 text-left">
                <ul>
                  <li><a data-toggle="collapse" href="#GradoPrimero">Grado Primero</a></li>

                  <div id="GradoPrimero" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>Un cuaderno de 100 hojas para cada una de las asignaturas</li>
                        <li>Un lápiz, un bicolor, un bolígrafo y un marcatextos</li>
                        <li>Un sacapuntas, una goma para borrar y unas tijeras</li>
                        <li>Una caja de lápices de colores</li>
                        <li>Un lápiz adhesivo</li>
                        <li>Un juego de geometría</li>
                        <li>Un paquete de 100 hojas</li>
                      </ul>
                    </div>
                  </div>

                  <li><a data-toggle="collapse" href="#GradoSegundo">Grado Segundo</a></li>
                  <div id="GradoSegundo" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>Un cuaderno de 100 hojas para cada una de las asignaturas</li>
                        <li>Un lápiz, un bicolor, un bolígrafo y un marcatextos</li>
                        <li>Un sacapuntas, una goma para borrar y unas tijeras</li>
                        <li>Una caja de lápices de colores</li>
                        <li>Un lápiz adhesivo</li>
                        <li>Un juego de geometría</li>
                        <li>Un paquete de 100 hojas</li>
                      </ul>
                    </div>
                  </div>

                  <li><a data-toggle="collapse" href="#GradoTercero">Grado Tercero</a></li>
                  <div id="GradoTercero" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>Un cuaderno de 100 hojas para cada una de las asignaturas</li>
                        <li>Un lápiz, un bicolor, un bolígrafo y un marcatextos</li>
                        <li>Un sacapuntas, una goma para borrar y unas tijeras</li>
                        <li>Una caja de lápices de colores</li>
                        <li>Un lápiz adhesivo</li>
                        <li>Un juego de geometría</li>
                        <li>Un paquete de 100 hojas</li>
                      </ul>
                    </div>
                  </div>

                  <li><a data-toggle="collapse" href="#GradoCuarto">Grado Cuarto</a></li>
                  <div id="GradoCuarto" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>Un cuaderno de 100 hojas para cada una de las asignaturas</li>
                        <li>Un lápiz, un bicolor, un bolígrafo y un marcatextos</li>
                        <li>Un sacapuntas, una goma para borrar y unas tijeras</li>
                        <li>Una caja de lápices de colores</li>
                        <li>Un lápiz adhesivo</li>
                        <li>Un juego de geometría</li>
                        <li>Un paquete de 100 hojas</li>
                      </ul>
                    </div>
                  </div>

                  <li><a data-toggle="collapse" href="#GradoQuinto">Grado Quinto</a></li>
                  <div id="GradoQuinto" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>Un cuaderno de 100 hojas para cada una de las asignaturas</li>
                        <li>Un lápiz, un bicolor, un bolígrafo y un marcatextos</li>
                        <li>Un sacapuntas, una goma para borrar y unas tijeras</li>
                        <li>Una caja de lápices de colores</li>
                        <li>Un lápiz adhesivo</li>
                        <li>Un juego de geometría</li>
                        <li>Un paquete de 100 hojas</li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <BtnSubir />
        </div>
        <div id="secundaria"></div>
      </main>
    );
  }
}

export default AdmisionesPrimaria;
