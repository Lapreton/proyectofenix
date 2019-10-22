import React, { Component } from 'react';

class LetrasGlosario extends Component {
    render() {
        return (

            <div className="col-12">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_a" className="nav-link">A</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_c" className="nav-link">C</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_d" className="nav-link">D</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_e" className="nav-link">E</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_h" className="nav-link">H</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_i" className="nav-link">I</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_l" className="nav-link">L</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_m" className="nav-link">M</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_o" className="nav-link">O</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_p" className="nav-link">P</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_r" className="nav-link">R</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_s" className="nav-link">S</a></li>
                    <li className="nav-item"><a data-toggle="tab" href="#glosario_t" className="nav-link">T</a></li>
                </ul>
            </div>
        )
    }
}

export default LetrasGlosario;