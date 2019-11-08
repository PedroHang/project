import React from 'react';
import app from '../firebaseConfig';

export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            senha: ''
        }

        this.login = this.login.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    login(){
        app
        .auth()
        .signInWithEmailAndPassword(
            this.state.email, 
            this.state.senha
        )
        .then(() => {
            this.props.history.push("/");
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    changeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    changePassword(e){
        this.setState({
            senha: e.target.value
        });
    }

    render(){
        return (
            <div>
                <input value={this.state.email} onChange={this.changeEmail} type="text" name="" id=""/>
                <input value={this.state.senha} onChange={this.changePassword} type="password" name="" id=""/>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}