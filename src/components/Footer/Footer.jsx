import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
         <Link to='/' id ='logo'><img className='logo-img' src={assets.logo} alt="" /></Link>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta eum numquam? Maxime beatae numquam ab ipsam, cumque natus nulla corporis fugiat, animi, aut cum! Dolores libero odit culpa eligendi!</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img  src={assets.twitter_icon} alt="" />
                <a href="https://www.linkedin.com/in/sohel-mollick-0942b4236/"><img src={assets.linkedin_icon} alt="" /></a> 
                </div>  
               
                </div>
                <div className="footer-content-right">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
                </div>
                <div className="footer-content-center">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-256-7890</li>
    <li>contact@tomato.com</li>
</ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © FoodBite.com-All Right Reserved 🔥</p>
        </div>
    </div>
  )
}

export default Footer