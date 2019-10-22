import React, { Component } from 'react';

class GlosarioP extends Component {
    render() {
        return (

            <div id="glosario_p" className="tab-pane fade col-12 text-left py-5">
                <div className="py-2">
                    <h3>Proceso de enseñanza.</h3>
                    <p>Conjunto de acciones que, siguiendo determinados principios y métodos, están desarrolladas por un facilitador (docente, otra persona o un recurso) para conseguir un resultado en un tercero (discente, grupo-clase), explicitado en forma de objetivos o metas de aprendizaje,</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Producción de artefactos.</h3>
                    <p>Realización de actividades de tipo práctico que conducen a un producto tangible, como por ejemplo maquetas, producciones artísticas, manualidades.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Proyectos.</h3>
                    <p>Trabajos o experiencias de aprendizaje que los alumnos realizan de forma independiente o fuera de la institución educativa, presentando tras su finalización un informe sobre los mismos.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Prueba objetiva.</h3>
                    <p>Modalidad de prueba escrita usada para la evaluación del aprendizaje, cuyo rasgo distintivo es la posibilidad de determinar inequívocamente si las respuestas de los sujetos que responden son correctas o incorrectas.</p>
                    <hr />  
                </div>
            </div>
        )
    }
}

export default GlosarioP;