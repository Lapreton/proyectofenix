import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import trash from '../icon/trash.svg';
import pencil from '../icon/pencil.svg';
import bandera from '../icon/banner.jpg';

class adminNoticias extends Component {
  state = {
    news: [],
    title: '',
    description: '',
    content: '',
    fecha: '',
    date: new Date(),
    _id: '',
    layout: 'Crear Noticia',
    boton: 'Agregar'
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDateChange = date => {
    this.setState({ fecha: date.toISOString().substring(0, 10), date: date });
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    this.getNew();
  }

  getNew = async () => {
    const res = await axios.get('http://localhost:4000/api/news');
    this.setState({ news: res.data });
  }

  deleteNew = async (id) => {
    if (window.confirm("¿Seguro que desea eliminar esta noticia?")) {
      await axios.delete('http://localhost:4000/api/news/' + id);
      this.getNew();
      alert("Noticia borrada con exito!!");
    }
  }

  updateNew = async (id) => {
    if (window.confirm("¿Desea actualizar esta noticia?")) {
      const res = await axios.get('http://localhost:4000/api/news/' + id);
      this.setState({
        _id: id,
        title: res.data.title,
        description: res.data.description,
        content: res.data.content,
        fecha: res.data.fecha,
        date: new Date(res.data.date),
        layout: 'Modificiar Noticia',
        boton: 'Actualizar'
      });
      window.scrollTo(0, 50);
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNew = {
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
      fecha: this.state.fecha,
      date: this.state.date
    };
    if (this.state._id) {
      await axios.put('http://localhost:4000/api/news/' + this.state._id, newNew);
      alert("Noticia actualizada correctamente!!");

    } else {
      await axios.post('http://localhost:4000/api/news', newNew);
      alert("Noticia agregada correctamente!!");
    }
    this.setState({ title: '', description: '', content: '', date: new Date(), layout: 'Crear Noticia', boton: 'Agregar' });
    this.getNew();
  }

  render() {
    return (
      <main role="main" className="lead container-fluid gradiente-fluid">

        <div className="row container shadow-lg bg-light m-auto gradiente adminNoticias">

          <div className="col-12 py-5">
            <h1>Administrador de Noticias</h1>
            <hr />
          </div>
          <div className="col-12 col-md-6 col-lg-6 mx-auto my-5">
            <form className="card card-body" onSubmit={this.onSubmit}>
              <div className="col-12">

                <h4>{this.state.layout}</h4>
              </div>
              <div className="form-group">
                <input
                  placeholder="Titulo"
                  maxLength="30"
                  name="title" type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  maxLength="94"
                  placeholder="Descripción"
                  name="description" type="text"
                  className="form-control textarea"
                  value={this.state.description}
                  onChange={this.onInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  maxLength="1000"
                  placeholder="Contenido"
                  name="content" type="text"
                  className="form-control textarea"
                  value={this.state.content}
                  onChange={this.onInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <DatePicker
                  type="button"
                  className="form-control"
                  selected={this.state.date}
                  dateFormat="dd/MM/yyyy"
                  onChange={this.onDateChange}
                />
              </div>
              <button type="submit" className="btn btn-success">{this.state.boton}</button>
            </form>
          </div>

          <div className="col-12 my-5 py-5 card card-body">
            <div className="">
              <h3>Noticias</h3>
              <hr />
            </div>
            <div className="row my-5">
              {
                this.state.news.map(news =>
                  <div className="col-12 col-md-4 col-lg-4 my-5" key={news._id}>
                    <div className="row">
                      <div className="col-1 p-0">
                        <div type="button" onClick={() => this.deleteNew(news._id)}>
                          <img className="btn btn-danger pr-0" src={trash} alt="ico trash delete" />
                        </div>
                        <div type="button" onClick={() => this.updateNew(news._id)}>
                          <img className="btn btn-primary pr-0" src={pencil} alt="ico pencil update" />
                        </div>
                      </div>
                      <div className="col-10 bg-transparent">
                        <div className="row">
                          <img src={bandera} className="img-fluid imgnew" alt="new's imagen" />
                          <div className="col-12 py-1"></div>
                          <div className="new col-12">
                            <div className="row">
                              <div className="col-12 p-0 title">{news.title}</div>
                              <div className="col-12 text-left card-body description">{news.description}</div>
                              <div className="col-12 p-0 fecha">{news.fecha}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-1"></div>
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

export default adminNoticias;
