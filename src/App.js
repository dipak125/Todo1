import React, {Component} from "react";
import {BrowserRouter,Route,Link,Switch} from "react-router-dom";

import Home from "./Home";
import Todos from "./Todos";
import Todo from "./Todo";
import Nav from "./Nav";


export default class App extends Component
{
  
 
  render(){
    return(
      <>
      <BrowserRouter>
        
        <Nav/>
          <Route exact path="/" component={()=><Home/>}/>
          <Route path="/details" component={()=> <Todos />}/>
          <Route path="/detail/:id" component={(props)=> <Todo id={props.match.params.id}/>}/>
         
          <Route path="/detail1" component={(props)=> <Todo  id={props.match.params.id}/>}/>
       
        </BrowserRouter>
      </>
    )
  }
}