import React, { Component } from 'react';
import axios from 'axios';

class adminNoticias extends Component {

  state = {
    news: [],
    title:'',
    content: ''
  }

  onChangeNew = (e) => {
    this.setState({
      title: e.target.value,
      content: e.target.value
    })
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/news');
    this.setState({ news: res.data })
  }

  onSubmit = async (e) =>{
    const res = await axios.post('http://localhost:4000/api/news', {title: this.state.title}, {content: this.state.content})
    e.preventDefault();
    console.log(res)
  }
  render() {
    return (

      <main role="main" className="lead container-fluid gradiente-fluid mb-0">

        <div className="row noticias">

          <div className="col-1"></div>
          <div className="col-11 py-5">
            <h1>Administrador de Noticias</h1>
            <hr />
          </div>
          <div className="col-6">

            <h3>Crear Noticia</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <input type="text" className="form-control" onChange={this.onChangeNew} />
                  <input type="text" className="form-control" onChange={this.onChangeNew} />
                  <button type="submit" className="btn btn-primary"> Guardar Noticia</button>
              </div>
            </form>
          </div>
          <div className="col-6 mx-auto pb-5">
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

export default adminNoticias;
