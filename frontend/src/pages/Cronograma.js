import React, { Component } from 'react';
import Calendar from '../components/Calendar.js';
class Cronograma extends Component {
  render() {
    return (

      <main role="main" className="container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row">

            <h1 className="py-5 mx-auto">Cronograma</h1>
            
            <div className="col-12 mx-auto">
                <Calendar />
            </div>

            <div className="">

            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Cronograma;
