import React from "react";
import "./auth.scss";

import logo from "../../assets/images/logo-png-white.png";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className='auth'>
      <div className='overlay'>
        <img src={logo} alt='' className='logo' />
      </div>
      <div className='box-wrap'>
        <div className='box signup'>
          <p className='jos'>Create your account</p>

          <div className='row'>
            <div className='half'>
              <p className='label'>Firstname</p>
              <input type='text' />
            </div>
            <div className='half'>
              <p className='label'>Lastname</p>
              <input type='text' />
            </div>
          </div>
          <div className='row'>
            <div className='half'>
              <p className='label'>Username</p>
              <input type='text' />
            </div>
            <div className='half'>
              <p className='label'>Phone no.</p>
              <input type='text' />
            </div>
          </div>
          <div className=''>
            <p className='label'>Email address</p>
            <input type='text' />
          </div>

          <p className='label'>Password</p>
          <input type='text' />

          <p className='forgot'>forgot password?</p>

          <Link to='/dashboard'>
            <button className='main-btn'>Sign Up</button>
          </Link>

          <p className='dont'>
            I have an account <Link to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
