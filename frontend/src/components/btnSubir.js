import React, { Component } from 'react';
import flecha from '../icon/flecha.png';

class btnSubir extends Component {
  render() {
    return (
      <div>
        <a className="btnSubir" href="#btnTopId"><img className="iconBtnSubir" src={flecha} alt="img flecha btn subir"></img>Subir</a>
      </div>
    );
  }
}

export default btnSubir;
