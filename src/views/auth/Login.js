import React from "react";
import "./auth.scss";

import logo from "../../assets/images/logo-png-white.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='auth'>
      <div className='overlay'>
        <img src={logo} alt='' className='logo' />
      </div>
      <div className='box login'>
        <p className='jos'>Login to your account</p>

        <p className='label'>Username</p>
        <input type='text' />

        <p className='label'>Password</p>
        <input type='text' />

        <p className='forgot'>forgot password?</p>

        <Link to='/dashboard'>
          <button className='main-btn'>Login</button>
        </Link>
        <p className='dont'>
          I do not have an account? <Link to='/signup'>Signup</Link>
        </p>
      </div>
    </div>
  );
}
