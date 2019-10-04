import React, { Component } from 'react';

export class Evento extends Component {
    render() {


        return (
            <div className="evento">
                <div className="row mx-3 py-2">
                    <div className="col-6 text-left">
                        <p className="my-auto"><b>{this.props.dia}</b></p>
                    </div>
                    <div className="col-6 text-right">
                        <p className="my-auto"><b>{this.props.fecha}</b></p>
                    </div>
                </div>
                <div className="row mx-3 py-2">
                    <div className="col-5 col-lg-6 text-left">
                        <p className="my-auto">{this.props.hora}</p>
                        <p className="my-auto">{this.props.hora1}</p>
                    </div>
                    <div className="col-7 col-lg-6 text-left">
                        <p className="my-auto">{this.props.descripcion}</p>
                        <p className="my-auto">{this.props.descripcion1}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Evento;