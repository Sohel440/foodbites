import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [curr , setCurr]  = useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>

        <div className="login-popup-title">
            <h2>{curr}</h2>
            <img onClick={()=> setShowLogin(false)} src= {assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {curr === "Sign up"?  <input type="text"placeholder='Your Name' required />:<></>}
           
            <input type="email"placeholder='Your Email' required/>
            <input type="password"placeholder='Your password'required/>
        </div>
        <button>{curr === "Sign up" ? "Create account": "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox"  required/>
            <p>By continue i agree to find the term of use & privacy policy.</p>
        </div>
        {curr === "Login" ?<p>Creater a new account <span onClick ={()=>{setCurr("Sign up")}}>Click here</span></p> :  <p>Already have an account <span onClick ={()=> setCurr("Login")}>Login here</span></p>}
        
      </form>
    </div>
  )
}

export default LoginPopup
