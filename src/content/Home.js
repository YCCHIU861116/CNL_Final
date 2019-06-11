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
        },
        {
          isFilled: false,
          isDue: false,
          winners: [],
          title: "Test 4",
          description: "None",
          id: '4'
        }
      ]
    };
  }

  render() {
    const items = []
    for (const [index, value] of this.state.FormList.entries()){
      var route = '/forms/:'+ value['id']
      items.push(
        <ul class="list-group"> 
          <li class="list-group-item">
            <Link to= {route}> <h3>{value['title']}</h3> </Link>
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
        },
        {
          isFilled: true,
          isDue: false,
          winners: [],
          title: "Test 5",
          description: "None",
          id: '5'
        }
      ]
    };
  }

  render() {
    const items = []
    for (const [index, value] of this.state.FormList.entries()){
      items.push(
        <ul class="list-group"> 
          <h3 class="list-group-item">
            {value['title']}
          </h3>
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
        isFilled: true,
        isDue: true,
        winners: ['b05902029','b05902053'],
        title: "Test 3",
        description: "None",
        id: '6'
        },
        {
        isFilled: true,
        isDue: true,
        winners: ['b05401029','b05902001'],
        title: "Test 6",
        description: "None",
        id: '6'
        }
      ]
    };
  }

  render() {
    const items = []
    for (const [index, value] of this.state.FormList.entries()){
      items.push(
        <ul class="list-group"> 
          <h3 class="list-group-title">
            {value['title']}
          </h3>
          <h4 class="list-group-title">
            Winners:
          </h4>
         </ul>
       )
      value['winners'].forEach(function(item,i,a){
        items.push( 
          <li class="list-group-item">
            {item}
          </li>
        )
      });
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
        <button type="button" class="btn btn-primary btn-block" onClick ={()=>{window.location.href='forms/new'}}>
           <h3> 創建問卷 </h3>
        </button>
        </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
