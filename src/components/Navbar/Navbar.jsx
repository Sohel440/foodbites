import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
const [menu ,serMenu] = useState("home");
const {getTotalCartAmount} =useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to= '/'><img className='logo'  src={assets.logo} alt="" /></Link>
        <ul className="navbar-menu">
            <a href='' className ={menu ==="home" ? "active" : ""} onClick={()=>{serMenu("home")}}>Home</a>
            <a href ='#explore-menu' className ={menu === "menu" ? "active" : "" }  onClick={()=>{serMenu("menu")}}>menu</a>
            <a href='#footer' className ={menu === "contact-us" ? "active":""} onClick={()=>{serMenu("contact-us")}}>contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <Link to='/cart' > <img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount() ===0?"": 2}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
