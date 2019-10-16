import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import pFrecuentes from '../components/assets/PreguntasFrecuentes.png';

class PreguntasFrecuentes extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        return (

            <main role="main" className="lead container-fluid gradiente-fluid preguntasfrecuentes">
                <div className="container gradiente shadow-lg bg-light">

                    <div className="row">

                        <div className="col-12 py-5 mx-auto">
                            <h1>Preguntas Frecuentes</h1>
                            <hr />
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                            <img className="w-100" src={pFrecuentes} alt="preguntas frecuentes img"></img>
                        </div>
                        <div className="col-8 col-md-8 col-12 my-auto">
                            <p className=" text-left">
                                A continuación encontrará un banco de preguntas que ha sido elaborado tomando como base las inquietudes más comunes
                                realizadas a la institución.
                            </p>
                        </div>

                        <div className="col-12 panel-title pt-5">

                            <h4 className="p-3 text-left">
                                ¿Que horario de atención maneja la institución?
                            </h4>

                            <p className="text-left p-3 ">
                                El horario de atención en la institución va de lunes a viernes desde las 7:00 am a la 1:00 pm, también puede comunicarse
                                a los números de <NavLink to="/Contactanos">contacto</NavLink> para más información.
                            </p>
                        </div>

                        <div className="col-12 panel-title">

                            <h4 className="p-3 text-left">
                                ¿Que horario de clases maneja la institución?
                            </h4>

                            <p classNa me="text-left p-3">
                                La institucion maneja un horario de 7:30 am a 11:30 am para los estudiantes de preescolar, de 6:30 am a 12:00 pm para los estudiantes de
                                primaria y de 6:30 am a 1:00 pm para los estudianes de bachillerato.
                            </p>
                        </div>

                        <div className="col-12 panel-title">

                            <h4 className="p-3 text-left">
                                ¿Que se necesita para la matrícula?
                            </h4>

                            <p className="text-left p-3">
                                Si el estudiante viene de otro colegio, es necesario haberlo retirado del SIMAT antes de proseguir con la matrícula,
                                también es necesario traer los documentos estipulados en la página de <NavLink to="/Admisiones">admisiones</NavLink>.
                            </p>
                        </div>

                        <div className="col-12 panel-title pb-5">

                            <h4 className="p-3 text-left">
                                ¿Hay fecha límite para matricular a mi Hijo/a?
                            </h4>

                            <p className="text-left p-3">
                                Hasta el 21 de diciembre se cierran las matrículas ordinarias, después del 5 de enero se abren las matrículas extraordinarias,
                                en casos especiales se puede matricular dentro del  periodo de clases en el transcurso de año.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        );

    }
}

export default PreguntasFrecuentes;
