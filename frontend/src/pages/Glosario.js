import React, { Component } from 'react';
import LetrasGlosario from '../components/glosariocomponents/LetrasGlosario.js';
import GlosarioA from '../components/glosariocomponents/GlosarioA.js';
import GlosarioC from '../components/glosariocomponents/GlosarioC.js';
import GlosarioD from '../components/glosariocomponents/GlosarioD.js';
import GlosarioE from '../components/glosariocomponents/GlosarioE.js';
import GlosarioH from '../components/glosariocomponents/GlosarioH.js';
import GlosarioI from '../components/glosariocomponents/GlosarioI.js';
import GlosarioL from '../components/glosariocomponents/GlosarioL.js';
import GlosarioM from '../components/glosariocomponents/GlosarioM.js';
import GlosarioO from '../components/glosariocomponents/GlosarioO.js';
import GlosarioP from '../components/glosariocomponents/GlosarioP.js';
import GlosarioR from '../components/glosariocomponents/GlosarioR.js';
import GlosarioS from '../components/glosariocomponents/GlosarioS.js';
import GlosarioT from '../components/glosariocomponents/GlosarioT.js';


class Glosario extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <main role="main" className="lead container-fluid gradiente-fluid ">
                <div className="container gradiente shadow-lg bg-light">

                    <div className="row">

                        <div className="col-12 py-5 ">
                            <h1>Glosario de Términos</h1>
                            <hr />
                        </div>

                        <LetrasGlosario />

                        <div className="col-12">
                            <div className="tab-content">
                                <GlosarioA />
                                <GlosarioC />
                                <GlosarioD />
                                <GlosarioE />
                                <GlosarioH />
                                <GlosarioI />
                                <GlosarioL />
                                <GlosarioM />
                                <GlosarioO />
                                <GlosarioP />
                                <GlosarioR />
                                <GlosarioS />
                                <GlosarioT />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Glosario;