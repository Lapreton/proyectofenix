import React, { Component } from 'react';
import AdmisionesPreescolar from './AdmisionesPreescolar';
import AdmisionesPrimaria from './AdmisionesPrimaria';
import AdmisionesSecundaria from './AdmisionesSecundaria';
import Silueta from '../components/assets/Silueta.png'

class Admisiones extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id="admisiones">
                <main role="main" className="lead container-fluid gradiente-fluid admisiones">
                    <div className="container gradiente shadow-lg bg-light">

                        <div className="row">

                            <div className="col-12 py-5 mx-auto">
                                <h1>Admisiones</h1>
                                <hr />
                            </div>

                            <div className="col-12">
                                <img src={Silueta} alt="Silueta admisiones"></img>
                            </div>
                            <div className="col-12 mx-auto">
                                <p className="pb-5  text-left">
                                    En Centro Educativo Fenix, contamos con los siguientes grados:

                                    <a href="#preescolar"> Preescolar</a>, <a href="#primaria">Primaria</a>, <a href="#secundaria">Secundaria</a>.<br />

                                    Tenga que en cuenta que debera llevar los documentos solicitados a la institución y presentarlos en la oficina de rectoría.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="preescolar"></div>
                </main>
                <div>
                    <AdmisionesPreescolar />
                    <AdmisionesPrimaria />
                    <AdmisionesSecundaria />
                </div>
            </div>
        );

    }
}

export default Admisiones;
