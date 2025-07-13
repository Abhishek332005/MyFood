import React from "react";
import {Link} from "react-router-dom"
// import './Hero.css'
import './Hero.css'

function Hero() {
    return (  
        <>
       <section>
             <div className="navbar">

        <div className="logo">
          <img src="img/logo.png"></img>
        </div>

      

        <div className="navbar_main">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#About">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="#Gallary">Gallary</Link></li>
                <li><Link to="#Review">Review</Link></li>
                <li><Link to="#Order">Order</Link></li>

                    <ul > <Link to='userregistration'> <button className="abc1">Signup</button> </Link></ul>  
                   <ul > <Link to='usersignup'> <button className="abc2" >Login</button> </Link></ul>  
                            <ul > <Link to=''> <button className="abc2" >Login</button> </Link></ul>  

                  
            </ul>
        </div>

        {/* <div className="navbar_icon">
            <i class='bx bx-search'></i>
            <i class='bx bx-cart' ></i>
            <i class='bx bxs-heart' ></i>
        </div> */}
 </div>
        </section>
              
             
            

 
        
   
        </>
    );
}

export default Hero;