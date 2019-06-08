import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {button, group} from 'react-bootstrap'; 

import Axios from 'axios';
Axios.defaults.withCredentials = true;

class Unfilled extends Component {
  constructor(props) {
    super(props);
    this.state ={
      title:'Unfilled Forms',
    };
  }

  componentDidMount() {
    /*Axios.get( '/api/account/form/unfilled')
      .then(function(response){
        console.log(response)
      });*/
  } 

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        
        <ul class="list-group">
          
          <li class="list-group-item"><Link to='/'>Form1</Link></li>
          <li class="list-group-item">Form2</li>
          <li class="list-group-item">Form3</li>
          <li class="list-group-item">Form4</li>
        </ul>
        <div class="btn-group-vertical" role="group">
          <button type="button" onClick ={()=>alert('!')}>Form1</button>
          <button type="button">Form2</button>
        </div>
      </div>
    );
  }
}

export default Unfilled;
