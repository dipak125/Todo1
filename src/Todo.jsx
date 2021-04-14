import axios from "axios";
import React, { useEffect,useState } from "react";

const Todo=(props)=>{
   
  const{id}=props;
   
  const[data,setData]=useState({
            id:null,
            userId:null,
            title: null,
            completed: null,
  });
  useEffect(()=>
  {   
      if(id!==null)
      {
      axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>
      {
         console.log("dipak gope");
          setData({
            id:res.data.id,
            userId:res.data.userId,
            title: res.data.title,
            completed: res.data.completed
          })
      }
      );
  }
 
},[]

  );
  const Change=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({
      ...data,
      [name]:value
    })
   
  }
 
  const Submit=()=>{
   const{id,userId,title,completed}=data;
   
    if(id=="" ||userId=="" || title==""|| completed)
    {
      alert("please fill the fileds");
    }
    else
    {
     alert("sucessfullt inserted");
    }
  }
  
 
 

    return(
        <>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">id</label>
    <input type="text" class="form-control" name="id" value={data.id} onChange={Change}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">userId</label>
    <input type="text" class="form-control"name="userId"value={data.userId} onChange={Change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Title</label>
    <input type="text" class="form-control" name="title" value={data.title}onChange={Change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">completed</label>
    <input type="text" class="form-control" name="completed" value={(data.completed)? "true": "false"}onChange={Change}/>
  </div>
 
  <button type="button" class="btn btn-primary" onClick={Submit}>Submit</button>
</form>
        </>
    )
}
export default Todo;