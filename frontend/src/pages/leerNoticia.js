import React, { Component } from 'react';
import axios from 'axios';

class leerNoticia extends Component {

    state = {
        news: [],
        title:'',
        description:'',
        content: '',
        date: new Date(),
        _id:''
    }

    async componentDidMount() {
        this.getNew(this.props.match.params.id);
    }

    getNew = async (id) => {
        const res = await axios.get('http://localhost:4000/api/news/' + id);
        this.setState({
            _id: this.props.match.params.id,
            title: res.data.title,
            description: res.data.description,
            content: res.data.content,

        })
        console.log(res);
    }

    render() {
        return (
            <main role="main" className="lead container-fluid gradiente-fluid">
                {
                    <div className="row container shadow-lg bg-light m-auto gradiente noticias">
                        <div className="col-12 py-5">
                            <h1>{this.state.title}</h1>
                            <hr />
                        </div>
                        <div className="col-10 mx-auto py-5">
                            <i>"{this.state.description}"</i>
                        </div>
                        <div className="col-10 mx-auto text-left py-5">
                            <p>{this.state.content}</p>
                        </div>
                    </div>
                }
            </main>
        );
    }
}

export default leerNoticia;
