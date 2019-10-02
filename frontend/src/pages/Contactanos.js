import React, { Component } from 'react';
import mapa from '../components/assets/Mapa.jpg'
import facebook from '../icon/facebook.svg';
import twitter from '../icon/twitter.svg';
class Contactanos extends Component {
  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid ">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row text-left">

            <div className="col-12 text-center">
              <h1 className="py-5 mx-auto">Contáctanos</h1>
              <hr />
            </div>

            <div className="col-12 mapa py-5">

              <h2 className="pb-5">Ubicación</h2>
              <div className="text-center">
                <a href="https://www.google.com/maps/@11.213106,-74.1781693,17.88z" target="_blank" title="Abrir en google maps" rel="noopener noreferrer"><img className="mapa" src={mapa} alt="Ubicación colegio Contactanos"></img></a>
              </div>
            </div>

            <div className="col-12 py-2">
              <h2>Información de contacto</h2>

              <p className="py-5">
                Dirección: Andrea Carolina Mz 29 casa 15
                <br />
                Teléfono: (5) 4343768
                <br />
                Celular: (+57) 3126194014
                <br />
                Dirección Electrónica: cefen2017@hotmail.com
                <br />
              </p>
            </div>

            <div className="col-12 py-5">
              <h2 className="pb-5">¿Tienes alguna pregunta?</h2>
              <p>
                Puedes contactarnos de lunes a viernes desde las 07:00 a.m hasta las 01:30 p.m
                <br /><br />
                También puedes seguirnos en nuestras redes sociales donde podrás ver contenido de la institución como también
                podráss enviarnos mensajes y obtener más información:
                <br />
              </p>

              <div className="col-12 py-4 text-left">
                <div className="row">
                  <div className="col-lg-2"><a href="https://www.facebook.com/Centroeducativo-Fenix-Cefen-883226068506461/" target="_blank" rel="noopener noreferrer"><img className="iconfooter mx-3" src={facebook} alt="img facebook footer"></img>Facebook</a></div>
                  <div className="col-lg-2"><a href="https://www.facebook.com/Centroeducativo-Fenix-Cefen-883226068506461/" target="_blank" rel="noopener noreferrer"><img className="iconfooter mx-3" src={twitter} alt="img twitter footer"></img>Twitter</a></div>
                  <div className="col-lg-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Contactanos;
