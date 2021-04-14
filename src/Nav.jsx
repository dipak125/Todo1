import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";

const Nav=()=>{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        <Link to="/details" class="nav-link" href="#">Todos</Link>
        <Link to="/detail1" class="nav-link" href="#">Create Todo</Link>
        
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Nav;