import React, { Component } from 'react';
import misionimg from '../components/assets/mision.png';
import visionimg from '../components/assets/vision.png';

class MisionVision extends Component {
<<<<<<< HEAD
  componentDidMount() {
    window.scrollTo(0, 0);
  }
=======

  componentDidMount() {
    window.scrollTo(0, 0);
  }

>>>>>>> edda5d60d1831ef84290777a78bc39fed87ba254
  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid ">

        <div className="container gradiente shadow-lg bg-light">

          <div className="mision row">

            <div className="col-sm-12 col-md-8 col-lg-8 mr-auto">
              <h1 className="py-5 mx-5">Misión</h1>
              <p className="pb-5  text-left">
                Nuestra misión se basa en el cambio y transformación que sufre el ser humano y su entorno conllevando con
                esto al progreso de la sociedad, suministrando a la comunidad educativa las herramientas necesarias para
                el desarrollo de sus capacidades y habilidades tanto cognitivas, motrices, socio-afectivas y comunicativas,
                asumiendo la responsabilidad y compromiso educativo con sus agentes de formación, fomentando el progreso y
                bienestar. Todo esto afianzándose de los valores del servicio, amor, respeto, la honestidad, la tolerancia,
                que se le inculcan a nuestros educandos, siendo ellos la razón de ser la institución.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 my-auto d-none d-md-block">
              <img className="img-fluid" src={misionimg} alt="mision img" />
            </div>
          </div>
          <hr />
          <div className="vision row">
            <div className="col-md-4 col-lg-4 my-auto d-none d-md-block">
              <img className="img-fluid" src={visionimg} alt="vision img" />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 ml-auto">
              <h1 className="py-5 mx-5">Visión</h1>
              <p className="pb-5  text-left">
                Acorde con la misión institucional y el propósito de ser líderes de la educación en el año 2020 queremos ser:
                Una institución referenciada por la comunidad por su alta calidad académica y formativa, innovadora, líderes
                en la formación pedagógica de las nuevas generaciones de niños que se conviertan en personas capaces de
                enfrentar los cambios que nuestra sociedad nos impone, apoyándose en los valores que se les fueron inculcados
                desde nuestras aulas y con el apoyo de la comunidad educativa.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MisionVision;
