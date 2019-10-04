import React, { Component } from 'react';
import Evento from '../components/Evento';

class Cronograma extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
<<<<<<< HEAD
=======
  
>>>>>>> edda5d60d1831ef84290777a78bc39fed87ba254
  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row">

            <div className="col-12 py-5">
              <h1>Cronograma</h1>
              <hr />
            </div>
            <div className="col-1"></div>
            <div className="col-11 text-left py-5">
              <p>A continuación está el  cronograma de las actividades establecidas para el año escolar 2020:</p>
            </div>
      
            <div className="col-12 pb-5">
              <Evento dia="Lunes" fecha="Febrero 3, 2020" hora="-6:15 a.m" descripcion="-Primer dia de clases." />
              <Evento dia="Lunes" fecha="Febrero 10, 2020" descripcion="-Inicio de las Olimpiadas Matemáticas." />
              <Evento dia="Jueves" fecha="Febrero 27, 2020" hora="-6:30 a.m a 7:00 a.m primaria" hora1="-7:30 a.m a 8:00 a.m preescolar" descripcion="-Reunión de padres de familia, las clases inician a las 8:00 a.m." />
              <Evento dia="Viernes" fecha="Febrero 29, 2020" hora="-6:15 a.m primaria" hora1="-7:30 a.m preescolar" descripcion="-Carnavalito de los valores." />
              <Evento dia="Lunes y Martes" fecha="Marzo 2 y 3, 2020" hora="-6:15 a.m primaria" hora1="-7:30 a.m preescolar" descripcion="-Celebración de las Fiestas de carnavales." />
              <Evento dia="Viernes" fecha="Marzo 6, 2020" descripcion="-Celebración del dia de la mujer." />
              <Evento dia="Jueves" fecha="Marzo 12, 2020" descripcion="-Celebración del dia del amigo." />
              <Evento dia="Viernes" fecha="Marzo 13, 2020" descripcion="-Actividad Merienda Nutritiva." />
              <Evento dia="Jueves" fecha="Marzo 19, 2020" descripcion="-Celebración del dia del hombre." />
              <Evento dia="Viernes" fecha="Marzo 20, 2020" descripcion="-Celebración del dia del agua." />
              <Evento dia="Viernes" fecha="Abril 10, 2020" descripcion="-Actividad Feria del dulce." />
              <Evento dia="Lunes a Jueves" fecha="Abril 6 a 9, 2020" descripcion="-Periodo de semana santa." />
              <Evento dia="Miércoles" fecha="Abril 22, 2020" descripcion="-Celebración del dia de la tierra." />
              <Evento dia="Jueves" fecha="Abril 23, 2020" descripcion="-Celebración del dia del idioma." />
              <Evento dia="Viernes" fecha="Abril 24, 2020" descripcion="-Celebración del dia del niño." descripcion1="-Celebración del dia del arbol." />
              <Evento dia="Viernes" fecha="Mayo 1, 2020" descripcion="-Celebración del dia del trabajo." />
              <Evento dia="Viernes" fecha="Mayo 8, 2020" descripcion="-Celebración del dia de la madre." />
              <Evento dia="Viernes" fecha="Mayo 15, 2020" descripcion="-Celebración del dia del maestro." descripcion1="-Actividad Merienda nutritiva." />
              <Evento dia="Jueves" fecha="Mayo 21, 2020" descripcion="-Celebración del dia afrocolombianidad." />
              <Evento dia="Viernes" fecha="Junio 5, 2020" descripcion="-Celebración del dia mundial del medio ambiente." descripcion1="-Final de las olimpiadas matemáticas." />
              <Evento dia="Jueves" fecha="Junio 14, 2020" descripcion="-Celebración del dia del estudiante." />
              <Evento dia="Viernes" fecha="Junio 15, 2020" descripcion="-Celebración del dia del padre." descripcion1="-Vacaciones de medio año." />
              <Evento dia="Lunes" fecha="Julio 13, 2020" descripcion="-Culminación de vacaciones, regreso a clases." descripcion1="-Inicio de las olimpiadas castellanas." />
              <Evento dia="Lunes" fecha="Julio 20, 2020" descripcion="-Celebración del dia de la independencia de Colombia." />
              <Evento dia="Viernes" fecha="Julio 25, 2020" descripcion="-Celebración de las fiestas del mar." />
              <Evento dia="Viernes" fecha="Agosto 7, 2020" descripcion="-Celebración de batalla de Boyaca." />
              <Evento dia="Viernes" fecha="Agosto 14, 2020" descripcion="-Actividad pijamada cinema." />
              <Evento dia="Viernes" fecha="Agosto 28, 2020" descripcion="-Actividad dia deportivo." />             
              <Evento dia="Viernes" fecha="Septiembre 4, 2020" descripcion="-Actividad feria de la ciencia para primaria." descripcion1="-Actividad dia artístico para preescolar." />
              <Evento dia="Viernes" fecha="Septiembre 11, 2020" descripcion="-Actividad amigo dulce." />
              <Evento dia="Sábado" fecha="Septiembre 19, 2020" descripcion="-Celebración del dia de la familia." descripcion1="-Actividad BINGO." />
              <Evento dia="Lunes a viernes" fecha="Octubre 7 a 15, 2020" descripcion="-Semana de receso." />
              <Evento dia="Viernes" fecha="Octubre 30, 2020" descripcion="-Celebración del dia de los niños." />
              <Evento dia="Lunes" fecha="Noviembre 2, 2020" descripcion="-Fin de las olimpiadas castellanas." />
              <Evento dia="Viernes" fecha="Noviembre 13, 2020" descripcion="-Fin de clases, salida de estudiantes ilesos." />
              <Evento dia="Lunes a viernes" fecha="Noviembre 23 a 27, 2020" descripcion="-Semana de recuperación." />
              <Evento dia="Sabado" fecha="Noviembre 28, 2020" descripcion="-Celebración de los grados CEFEN 2020." />
            </div>  
          </div>
        </div>
      </main>
    );
  }
}

export default Cronograma;
