import React, { Component } from 'react';

class GlosarioR extends Component {
    render() {
        return (

            <div id="glosario_r" className="tab-pane fade col-12 text-left py-5">
                <div className="py-2">
                    <h3>Recursos didácticos.</h3>
                    <p>Medios, materiales, equipos o incluso infraestructuras destinadas a facilitar el proceso de enseñanza y el aprendizaje.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Retroalimentación.</h3>
                    <p>Obtención de información sobre la marcha de un proceso o los resultados del mismo, de tal manera que esa información pueda ser utilizada para tomar decisiones sobre el proceso en marcha o sobre procesos futuros.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Recursos contextuales.</h3>
                    <p>Centros de documentación, de recursos, de información, de prácticas, etc. existentes en el entorno.</p>
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

export default GlosarioR;