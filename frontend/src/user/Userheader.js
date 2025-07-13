import React from "react";
import {Link} from "react-router-dom"
 //import '../home/Hero.css'  ye tab lagana jab uper vala comment hata dena 
 import './Userheader.css'
import { NavLink, useNavigate } from "react-router-dom";
function UserHeader() {
    //-------------------------------------------------------------logout jab kare to kaha jaye -------------------
const navigate=useNavigate()
const logout = ()=>{

    const myToken=localStorage.getItem("key")
    if(!myToken){
        navigate("UserLogin")
    }
    else{
        localStorage.removeItem("key")
        navigate("/")
    }
}
//---------------------------------------------------------------
    
    return (  
        <>
     
        
<nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    
    {/* Logo - Left */}
    <a className="navbar-brand fw-bold text-primary fs-3" href="#">
      🍽️ Food
    </a>

    {/* Nav Links - Center */}
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
    

<ul className="navbar-nav gap-3">
  <li className="nav-item">
    <NavLink to="/" end className="nav-link nav-pill">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/fastfood" className="nav-link nav-pill">Fast Food</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/breakfast" className="nav-link nav-pill">Break Fast</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/lunch" className="nav-link nav-pill">Lunch</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/dinner" className="nav-link nav-pill">Dinner</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/sweet" className="nav-link nav-pill">Sweet</NavLink>
  </li>
   <li className="nav-item">
    <NavLink to="/mycart" className="nav-link nav-pill">My Cart</NavLink>
  </li>
</ul>



    </div>

    {/* Logout Button - Right */}
    <button
      onClick={logout}
      className="btn btn-outline-danger fw-semibold"
    >
      Log Out
    </button>
  </div>
</nav>








   
        </>
    );
}

export default UserHeader;