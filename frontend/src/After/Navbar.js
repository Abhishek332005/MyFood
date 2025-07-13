import React from "react";
import {useState} from 'react-router-dom'
import {Link} from "react-router-dom"

import './Navbar1.css'

function Navbar() {








    return (  
        <>
       <section>
             <div className="navbar">

        <div className="logo">
          <img src="img/logo.png"></img>
        </div>

      

        <div className="navbar_main">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Gallary">Gallary</a></li>
                <li><a href="#Review">Review</a></li>
                <li><a href="#Order">Order</a></li>

                    <ul > <Link to='userlogin'> <button className="abc1">Login</button> </Link></ul>  
                   <ul > <Link to='usersignup'> <button className="abc2" >Signup</button> </Link></ul>  

                  
            </ul>
        </div>

        <div className="navbar_icon">
            <i class='bx bx-search'></i>
            <i class='bx bx-cart' ></i>
            <i class='bx bxs-heart' ></i>
        </div>
 </div>
        </section>
              
             
            

 
        
   
        </>
    );
}

export default Navbar;