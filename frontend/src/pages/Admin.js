import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

    state = {
        news: [],
        user: '',
        password: '',
        type: '',
        _id: ''
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
    }

    onInputChange = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <main role="main" className="lead container-fluid gradiente-fluid">
                {
                    <div className="row container shadow-lg bg-light m-auto gradiente Admin">
                        <div className="col-12 py-5">
                            <h1>Interfaz de Usuario</h1>
                            <hr />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mx-auto my-5">
                            <form className="card card-body" onSubmit={this.onSubmit}>
                                <div className="col-12 text-left">
                                    <h4>Usuario</h4>
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder="Usuario"
                                        maxLength="16"
                                        name="user" type="text"
                                        className="form-control"
                                        value={this.state.user}
                                        onChange={this.onInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-12 text-left">
                                    <h4>Contraseña</h4>
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder="Contraseña"
                                        maxLength="30"
                                        name="password" type="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.onInputChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-success">Ingresar</button>
                            </form>
                        </div>
                    </div>
                }
            </main>
        );
    }
}

export default Admin;