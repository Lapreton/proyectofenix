import React, { Component } from 'react';
import BtnSubir from '../components/btnSubir';

class SistemaEvaluacion extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row">

            <div className="py-5 mx-auto col-12">
              <h1>Sistema de Evaluación</h1>
              <hr />
            </div>
          </div>

          <div className="row mx-auto">

            <div className="col-12 text-left py-4">
              <p>
                Los alumnos al ser evaluados recibirán su informe valorativo según los logros adquiridos, teniendo en cuenta su proceso y la escala
                propuesta del MEN, adopta las siguientes definiciones para la comunidad educativa y de conformidad con el Decreto 1290 del 16 de abril
                de 2009 en su Art. 5, el COLEGIO establece la siguiente escala valorativa:
                </p>
            </div>

            <div className="col-12 py-5">
              <h2>Para Preescolar</h2>

              <div className="text-left pt-5 pb-2">
                <p>
                  <b>E= EXCELENTE:</b> Cuando ha logrado el máximo nivel esperado en todas las dimensiones del desarrollo humano consideradas en el plan de estudio.
                  <br /><br />
                  <b>S= SOBRESALIENTE:</b> Cuando demuestra un buen nivel de desarrollo en todos sus procesos de interpretación, comprensión y análisis.
                  <br /><br />
                  <b>A= ACEPTABLE:</b> Cuando ha desarrollado el mínimo esperado de sus competencias comunicativas, los mismos en sus procesos de razonamiento.
                  <br /><br />
                  <b>I= INSUFICIENTE:</b> Cuando su proceso de razonamiento, sus niveles de comunicación, de comprensión, de significados es tan bajo que
                  le impiden interpretar situaciones y resolver problemas con bojo grado de complejidad.
                  <br /><br />
                </p>
              </div>
            </div>

            <div className="pb-5 col-12">
              <h2>Para Primaria y Secundaria</h2>

              <div className="text-left py-5">
                <p>
                  RANGO DE CALIFICACIÓN NUMÉRICA (DECRETO 1290 DE 2009)
                  <br /><br />
                  De 1.0 a 2.9 BAJO
                  <br />
                  De 3.0 a 3.7 BÁSICO
                  <br />
                  De3.8 a 4.5 ALTO
                  <br />
                  De 4.5 a 5.0 SUPERIOR
                </p>
              </div>

              <div className="text-left pb-5">

                <p>
                  <b>Desempeño Superior:</b> El estudiante muestra dominio avanzado de la disciplina, evidenciando claramente la aplicación de los principios
                  fundamentales establecidos en el modelo pedagógico.
                  <br /><br />
                  <b>Desempeño Alto:</b> El estudiante alcanza el dominio de la disciplina con algunas actividades de refuerzo, evidenciando la aplicación de
                  los principios fundamentales es-tablecidos en el modelo pedagógico.
                  <br /><br />
                  <b>Desempeño Básico:</b> Presenta una actitud y comportamiento aceptable con los valores y la filosofía del colegio, cumpliendo los
                  requerimientos mínimos para alcanzar los desempeños de comprensión necesarios en la disciplina.
                  <br /><br />
                  <b>Desempeño Bajo:</b> Presenta actitud insuficiente y de desinterés ante los valores, la filosofía del colegio y ante los requerimientos
                  mínimos para alcanzar los desempeños de comprensión básicos necesarios en la disciplina.
                </p>
              </div>
            </div>
          </div>
          <BtnSubir />
        </div>
      </main >
    );
  }
}

export default SistemaEvaluacion;
