import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
//components
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
//pages
import Inicio from './pages/Inicio.js';
import Admisiones from './pages/Admisiones.js'
import GrupoDirectivo from './pages/GrupoDirectivo.js';
import SistemaEvaluacion from './pages/SistemaEvaluacion.js';
import Cronograma from './pages/Cronograma.js';
import CalendarioAcademico from './pages/CalendarioAcademico.js';
import Galeria from './pages/Galeria.js';
import MisionVision from './pages/MisionVision.js';
import SimbolosInstitucionales from './pages/SimbolosInstitucionales.js';
import ResenaHistorica from './pages/ResenaHistorica.js';
import FundamentosInstitucionales from './pages/FundamentosInstitucionales.js';
import Contactanos from './pages/Contactanos.js';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.js';
import Error from './pages/Error.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/Admisiones" component={Admisiones} />
            <Route path="/GrupoDirectivo" component={GrupoDirectivo} />
            <Route path="/SistemaEvaluacion" component={SistemaEvaluacion} />
            <Route path="/Cronograma" component={Cronograma} />
            <Route path="/CalendarioAcademico" component={CalendarioAcademico} />
            <Route path="/Galeria" component={Galeria} />
            <Route path="/MisionVision" component={MisionVision} />
            <Route path="/SimbolosInstitucionales" component={SimbolosInstitucionales} />
            <Route path="/ResenaHistorica" component={ResenaHistorica} />
            <Route path="/FundamentosInstitucionales" component={FundamentosInstitucionales} />
            <Route path="/Contactanos" component={Contactanos} />
            <Route path="/PreguntasFrecuentes" component={PreguntasFrecuentes} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
