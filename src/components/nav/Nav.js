import React from "react";
import "./Nav.scss";

import logo from "../../assets/images/logo-png-blue.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className='nav'>
      <img src={logo} alt='' className='logo' />

      <div className='links'>
        <Link to='/login'>
          <a href=''>
            <span className='login'>Login</span>
          </a>
        </Link>

        <Link to='/signup'>
          <button className='main-btn'>signup</button>
        </Link>
      </div>
    </div>
  );
}
