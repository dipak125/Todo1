import React, {Component} from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import axios from "axios";
export default class Todos extends Component
{
  constructor()
  {
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos/").then(res=>{
         
        this.setState({
          ...this.state,
            data: (res.data)
        })
    })
  }
  render(){
    return(
      <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">completed</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
    {this.state.data.map(d=>
            <tr>
            <th scope="row">{d.userId}</th>
            <td>{d.id}</td>
            <td>{d.title}</td>
            <td>{(d.completed)? "true": "false"}</td>
            <td>
                <Link to={`/detail/${d.id}`}>view</Link>&nbsp;&nbsp;
                <Link to={`/detail/${d.id}`}>edit</Link>
            </td>
           
          </tr>
        )}
   
  </tbody>
</table>
      </>
    )
  }
}