import React, { Component } from 'react';

class GlosarioA extends Component {
    render() {
        return (

            <div id="glosario_a" className="tab-pane active col-12 text-left py-5">
                <div className="py-2">
                    <h3>Acción tutorial.</h3>
                    <p>Actuación docente que se realiza con la finalidad de apoyar el aprendizaje del estudiante, así como su desarrollo personal y profesional.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Actitud.</h3>
                    <p>Disposición que muestra una persona a responder de una determinada manera ante los más diversos objetos y situaciones.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Aprendizaje.</h3>
                    <p>Resultado observado en forma de cambio más o menos permanente del comportamiento de una persona, que se produce como consecuencia de una acción sistemática (por ejemplo, de la enseñanza) o simplemente de una práctica realizada por el aprendiz.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Atención.</h3>
                    <p>Proceso mental por el que una persona selecciona determinados estímulos, e ignora otros, para su posterior análisis y evaluación.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Autoevaluación del alumno.</h3>
                    <p>Procedimiento de evaluación según el cual un estudiante se evalúa a sí mismo, emitiendo juicios sobre el aprendizaje logrado.</p>
                    <hr />  
                </div>
            </div>
        )
    }
}

export default GlosarioA;