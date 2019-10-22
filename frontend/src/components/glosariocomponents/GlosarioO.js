import React, { Component } from 'react';

class GlosarioO extends Component {
    render() {
        return (

            <div id="glosario_o" className="tab-pane fade col-12 text-left py-5">
                <div className="py-2">
                    <h3>Orientación.</h3>
                    <p>Proceso educativo cuya finalidad es favorecer el desarrollo integral (académico, personal y profesional) del estudiante.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Orientación del aprendizaje.</h3>
                    <p>Cuando el proceso de orientación se fija como meta principal optimizar el aprendizaje de los estudiantes.</p>
                    <hr />  
                </div>

                <div className="py-2">
                    <h3>Orientación para el desarrollo personal.</h3>
                    <p>Cuando el proceso de orientación se fija como meta potenciar la formación del estudiante en las esferas cultural, social, familiar, relacional, ética.</p>
                    <hr />  
                </div>
            </div>
        )
    }
}

export default GlosarioO;