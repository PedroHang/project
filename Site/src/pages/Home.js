import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h1 className="title">Questions</h1>
                <Link className="bt" to="/novapergunta">New questions</Link>
            </div>    
        )
    }
}