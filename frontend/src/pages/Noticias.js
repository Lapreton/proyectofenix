import React, { Component } from 'react';
import axios from 'axios';

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

          <div className="col-1"></div>
          <div className="col-11 py-5">
            <h1>Noticias</h1>
            <hr />
          </div>
          <div className="col-1"></div>
          <div className="col-11 mx-auto pb-5">
            <div className="row">
              {
                this.state.news.map(news =>
                  <div className="col-3 mx-3 mb-3 new" key={news._id}>
                    <div className="col-12 py-3 title">{news.title}</div>
                    <div className="col-12 content">{news.content}</div>
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