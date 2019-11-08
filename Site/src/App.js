import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import app from './firebaseConfig';
import NovaPergunta from './pages/NovaPergunta';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      usuario: null
    }
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount(){
    app.auth().onAuthStateChanged((usuarioLogado) => {
      if(usuarioLogado != null){
        this.setState({
          usuario: usuarioLogado
        })
      }
    })
  }

  logOut(){
    app.auth().signOut()
    .then(() => {
      window.location.href = "/";
    });
  }

  render(){
    return (
      <Router>
        <div className="masterPage">
          <div className="navigation">
<Link to="/">Home</Link>
        <Link to="/sobre">About us</Link>
        
        {
          this.state.usuario == null &&
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </div>
        }
        
        {
          this.state.usuario != null &&
            <div>
              <span>Welcome, {this.state.usuario.email}</span>
              <a className="bt" onClick={ this.logOut }>Sign out</a>
            </div>
        }
          </div>

        <Route path="/" exact component={Home} />
        <Route path="/produto" component={Product} />
        <Route path="/sobre" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path ="/novapergunta" component={NovaPergunta}/>
        </div>
        
      </Router>
    )
  }
}