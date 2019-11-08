import React from 'react';
import app from '../firebaseConfig';
export default class NovaPergunta extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: '',
            descricao: '',
            logado: false
        }
    }
    componentDidMount(){
        app
        .auth()
        .onAuthStateChanged((user) => {
            if(user != null){
                this.setState({
                    logado:true
                })
            }
        }
        )}

    _changeTitulo = (evt) => {
        this.setState({
            titulo: evt.target.value
        })
    }

    _changeDescricao = (evt) => {
        this.setState({
            descricao: evt.target.value
        })
    }

    _postar = (evt) => {
        evt.preventDefault();

        app.database().ref('/questions').push({
            title: this.state.titulo,
            description: this.state.descricao
        })
        .then(() => {
            this.props.history.push('/');
        });
           
    }

    render(){
        return(
            <div>
                <h1 className="title">New question</h1>
                <form className="form" onSubmit={this._postar}>
                    <input onChange={this._changeTitulo} value={this.state.titulo} type="text" />
                    <textarea onChange={this._changeDescricao} value={this.state.descricao} cols="30" rows="10"></textarea>
                    {
                        this.state.logado &&
                        <input className="bt" type="submit" value="Postar"></input>
                    }
                    
                </form>
            </div>
        )
    }
}