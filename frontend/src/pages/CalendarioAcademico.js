import React, { Component } from 'react';

class CalendarioAcademico extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row">

            <div className="col-12 py-5 mx-auto">
              <h1 className="">Calendario Académico</h1>
              <hr />
            </div>

            <div className="col-12 py-5 mx-auto text-left">
              <p>
                En el Centro Educativo Fenix, nos encontramos manejando una jornada diurna haciendo uso del calendario A,
                estipulado por el Ministerio de Educación de Colombia, el cual dicta que:
              </p>

              <ul className="py-5">
                <li>1. Para docentes y directivos docentes:</li>
                <li>1.1. Cuarenta (40) semanas de trabajo académico con estudiantes, distribuido en dos períodos semestrales.</li>
                <li>1.2. Cinco (5) semanas de actividades de desarrollo institucional.</li>
                <li>1.3. Siete semanas de vacaciones.</li>
                <li>2. Para estudiantes:</li>
                <li>2.1. Cuarenta (40) semanas de trabajo académico, distribuido en dos períodos semestrales.</li>
                <li>2.2. Doce (12) semanas de receso estudiantil.</li>
              </ul>

              <p>
                El año escolar puede comenzar a finales de enero o inicios de febreo y termina a mediados de noviembre, tambien
                se encuentra dividido en cuatro (4) períodos académicos. 
                <br /><br />
                En Semana Santa existe un periodo de vacaciones (marzo-abril).
                <br />
                Contamos también con un mes de vacaciones a mediados del año (junio—julio) hasta principios de julio.           
                <br />
                Tambien tenemos una semana de receso en octubre.
                <br /><br />    
                En el mes de noviembre tenemos las recuperaciones de cursos, donde los estudianes tendrán la oportunidad de recuperar
                todas las asignaturas reprobadas.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default CalendarioAcademico;

