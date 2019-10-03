import React, { Component } from 'react';
import bandera from '../icon/bandera.png';
import escudo from '../icon/escudo.png';

class SimbolosInstitucionales extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row simbolosInstitucionales">

            <div className="col-12">
              <h1 className="pt-5 pb-2 mx-auto">Símbolos Institucionales</h1>
              <hr />
            </div>

            <div className="col-6 mx-auto">
              <h2 className="py-4">Bandera</h2>
              <img className="py-4" src={bandera} alt="Simbolos institucionales bandera"></img>
            </div>

            <div className="col-6 mx-auto">
              <h2 className="py-4">Escudo</h2>
              <img className="py-4" src={escudo} alt="Simbolos institucionales escudo"></img>
            </div>

            <div className="col-12">
              
              <p className="py-5 text-left">
                El ave Fénix…representa el resurgir de los valores, del conocimiento hu-mano y de la sabiduría transmitida de generación en generación, llevándo-nos a una nueva mejorada sociedad.
                Fénix por lo tanto es inmortal; así como lo es el conocimiento, que se transmite a través de la enseñanza.
                </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default SimbolosInstitucionales;
