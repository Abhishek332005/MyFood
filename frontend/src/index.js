import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HeroPage from './home/HeroPage';
import UserRegistration from './common/UserRegistration';
import UserLogin from './common/UserLogin';
import Navbar from './After/Navbar';
import Menu from './common/Menu';
import UserDash from './user/UserDashboard';
import UserHeader from './user/Userheader';





  import Sweet from './After/Sweet';
import Dinner from './After/Dinner';
import FastFood from './After/FastFood';
import BreakFast from './After/BreakFast';
import Lunch from './After/Lunch';




// import AddFooditem from './supervisior/AddFoodItem';
// import SuperVisiorDashboard from './supervisior/SuperVisiorDashboard';
// import SuperVisiorHeader from './supervisior/SuperVisiorHeader';
// import ViewOrder from './supervisior/ViewOrder';
import MyCart from './After/MyCart';


import { CartProvider } from "./context/CartContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CartProvider>
  <BrowserRouter>

  
  <Routes>


<Route path='/' element={<HeroPage/>}></Route>
<Route path='userRegistration' element={<UserRegistration/>}></Route>
<Route path='usersignup' element={<UserLogin/>}></Route>
<Route path='afternavbar' element={<Navbar/>}></Route>
<Route path='menu' element={<Menu/>}></Route>
<Route path='userdash' element={<UserDash/>}></Route>
<Route path='userheader' element={<UserHeader/>}></Route>








<Route path='sweet' element={<Sweet/>}></Route>
<Route path='lunch' element={<Lunch/>}></Route>
<Route path='breakfast' element={<BreakFast/>}></Route>
<Route path='dinner' element={<Dinner/>}></Route>
<Route path='fastfood' element={<FastFood/>}></Route>
<Route path='mycart' element={<MyCart/>}></Route>


{/* 
<Route path='addfooditem' element={<AddFooditem/>}></Route>
<Route path='supervisiordashboard' element={<SuperVisiorDashboard/>}></Route>
<Route path='supervisiorheader' element={<SuperVisiorHeader/>}></Route>
<Route path='vieworder' element={<ViewOrder/>}></Route> */}


  </Routes>

  </BrowserRouter>
  </CartProvider>
 
);



