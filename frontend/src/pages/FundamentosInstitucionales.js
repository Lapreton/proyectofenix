import React, { Component } from 'react';
import leyendo from '../components/assets/Leyendo.png';

class FundamentosInstitucionales extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid fundamentosinstitucionales">
        <div className="container gradiente shadow-lg bg-light">

          <div className="row">

            <div className="col-12">
              <h1 className="py-5 mx-auto">Fundamentos Institucionales</h1>
              <hr />
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <img src={leyendo} alt="leyendo fundamentosinstituionales"></img>
            </div>
            <div className="col-4"></div>
            <div className="col-12 mx-auto text-left">
              <h2 className="py-2">Fundamento Filosófico</h2>

              <p className="py-5">
                La educación que se fundamenta en valores, además de dignificar al ser humano y de proveerle soluciones a sus dificultades y riesgos, respeta la naturaleza,
                cuenta con los contextos de vida de todas las especies y perpetua la acción creadora de Dios.
                <br /><br />
                Nuestra institución forma niños, niñas y jóvenes autónomos cumplidores de los deberes y respetuosos de los derechos; con espíritu abierto de su-peración y
                actualización en el conocimiento; preparados con la más alta calidad con servicios educativos que complementan el proceso de formación como jornadas
                complementarias, deportes, recreación, talleres en valores.
                <br /><br />
                Se  promoverá la educación de esta nueva generación más tecnificada que pensante y lograr un tipo de hombre nuevo; con una formación independiente,
                capaz de pensar por cuenta propia, con amplios conocimientos, dotados de un profundo sentido de solidaridad humana.
              </p>
              <hr />
            </div>

            <div className="col-12 mx-auto text-left">
              <h2 className="py-2">Fundamento Ecológico</h2>

              <p className="py-5">
                La  “cultura del deshecho” eleva los niveles de contaminación, la ambición de consumo no mide el  impacto de la tecnología ni el daño que las  sustancias toxicas,
                radiactivas y no biodegradables ocasionan en el medio ambiente. Reciclar, seleccionar desechos, aprovechar residuos y  tomar medi-das de manejo adecuado de la basura
                hace parte de la formación humana integral.
                <br /><br />
                El desarrollo de la tecnología por la raza humana ha permitido una mayor explotación de los recursos naturales y ha ayudado a paliar parte de los riesgos de los peligros naturales.
                No obstante, a pesar de este progreso, el destino de la civilización humana está estrechamente ligado a los cambios en el medio ambiente.
                Existe un complejísimo sistema de retroalimentación  entre el uso de la tecnología avanzada y los cambios en el medio ambiente, que sólo ahora se están comenzando a entender,
                aunque muy lentamente.
                <br /><br />
                Las amenazas a la naturaleza provocadas por el hombre son, entre otras, la contaminación, la deforestación, y desastres. La humanidad ha intervenido en la extinción de
                algunas plantas y animales.
                Los niños, niñas y jóvenes de nuestra institución serán preparados  para la protección y cuidado de la vida en todas sus manifestaciones, para trans-formar  los estilos de vida,
                haciéndolos más austeros, justos, solidarios y cuidadosos de los bienes de  la creación.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default FundamentosInstitucionales;
