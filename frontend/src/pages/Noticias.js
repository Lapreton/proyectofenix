import React, { Component } from 'react';
import axios from 'axios';
import bandera from '../icon/banner.jpg';
import {Link} from 'react-router-dom';

class Noticias extends Component {

  state = {
    news: []
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/news');
    this.setState({ news: res.data });
  }
  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid mb-0">

        <div className="row text-left noticias">

          <div className="col-11 ml-auto py-5">
            <h1>Noticias</h1>
            <hr />
          </div>          
          <div className="col-10 mx-auto pb-5">
            <div className="row">
              {
                this.state.news.map(news =>
                  <div className="col-12 col-md-4 col-lg-4 my-5" key={news._id}>
                    <div className="row">                       
                      <div className="col-10 mx-auto bg-transparent">
                        <div className="row">
                          <img src={bandera} className="img-fluid imgnew" alt=" s"/>
                          <div className="col-12 py-1"></div>
                          <div className="new col-12">
                            <div className="row">
                              <div className="col-12 p-0 title">{news.title}</div>
                              <div className="col-12 text-left card-body description"><p>{news.description}</p></div>
                              <div className="col-12 card-footer p-0"><Link to={"/leerNoticia/" + news._id} target="_blank" rel="noopener noreferrer">Leer más</Link></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>            
                  </div> 
                )
              }
            </div>  
          </div>
        </div>
      </main>
    );
  }
}

export default Noticias;