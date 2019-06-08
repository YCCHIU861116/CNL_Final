import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import {Button, group,Grid,Row,Col, PageHeader} from 'react-bootstrap'; 

import FormCreate from '../content/FormCreate';
import FillForm from '../content/FillForm';

import Axios from 'axios';
Axios.defaults.withCredentials = true;

class Unfilled extends Component {
  constructor(props) {
    super(props);
    this.state ={
      FormList:[
        {
          isFilled: false,
          isDue: false,
          winners: [],
          title: "Test 1",
          description: "None",
          id: '1'
        }
      ]
    };
  }

  render() {
    const items = []
    for (const [index, value] of this.state.FormList.entries()){
      items.push(
        <ul class="list-group"> 
          <li class="list-group-item">
            <Link to='/forms/:FormId'> {value['title']} </Link>
          </li>
      </ul>
       )
    }
    
    return (  
      <div class="panel panel-primary ">
        <div class="panel-heading">
          <h3 class="panel-title">
              未填
          </h3>
        </div>
          <div class="panel-body">
             {items}
          </div>
      </div>
    );
  }
}

class Filled extends Component {
  constructor(props) {
    super(props);
    this.state ={
      FormList:[
        {
          isFilled: true,
          isDue: false,
          winners: [],
          title: "Test 2",
          description: "None",
          id: '2'
        }
      ]
    };
  }

  render() {
    const items = []
    for (const [index, value] of this.state.FormList.entries()){
      items.push(
        <ul class="list-group"> 
          <li class="list-group-item">
            {value['title']}
          </li>
        </ul>
       )
    }
    
    return (  
      <div class="panel panel-success ">
        <div class="panel-heading">
          <h3 class="panel-title">
              已填
          </h3>
        </div>
          <div class="panel-body">
             {items}
          </div>
      </div>
    );
  }
}

class Due extends Component {
  constructor(props) {
    super(props);
    this.state ={
      FormList:[
        {
        isFilled: false,
        isDue: false,
        winners: ['b05902029'],
        title: "Test 3",
        description: "None",
        id: '3'
        }
      ]
    };
  }

  render() {
    const items = []
    for (const [index, value] of this.state.FormList.entries()){
      items.push(
        <ul class="list-group"> 
          <li class="list-group-item">
            {value['title']}
          </li>
        </ul>
       )
    }
    
    return (  
      <div class="panel panel-warning ">
        <div class="panel-heading">
          <h3 class="panel-title">
              已開獎
          </h3>
        </div>
          <div class="panel-body">
             {items}
          </div>
      </div>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      FormList:[]
    };
  }
  /*dataHandeler(data){
    if(data.isFilled === false){
      Unfilled.state.FormList.push(data);
    }
    else{
      if(data.isDue === false){
        Filled.state.FormList.push(data);
      }
      else{
        Due.state.FormList.push(data);
      }
    }
  }*/
  
  componentDidMount() {
    /*getAxios: (operation, dataHandeler) =>{
      Axios.get(renderURI('/axios') + operation)
        .then(response => {
          dataHandeler(response.data);
        })
    }*/
  }
  render() {
    return (
     <Grid>
        <Row>
          <Col><PageHeader>問卷填答系統</PageHeader></Col>
        </Row>
        <Row>
          <Col><Unfilled /></Col>
          <Col><Filled /></Col>
          <Col><Due /></Col>
        </Row>
        <Row>
        <Col>
        <button onClick ={()=>{window.location.href='forms/new'}}>
           創建問卷
        </button>
        </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
