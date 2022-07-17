 import React from "react";
import "./Navbar.css";
import logourl from '../Navbar/e-icon.png';
import { MDBCol, MDBIcon } from "mdbreact";

function Navbar() {
  return (

    <div>
      <div className="navbar_container">
        <div className="navbar_left">
         <img src ={logourl}alt =" "height="50px"/>
        </div>

        <div className="navbar_right">
        <MDBCol md="60">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input  className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"/>
      </div>
    </MDBCol>
<div className="login"> 
<a class="login" href="#">LogIn</a>
</div>
          <p>About</p>
          <p>Cart</p> 
        </div>
      </div>

      <div className="navbar_line">
        <hr />
      </div>
      
    </div>
  );
}
export default Navbar;