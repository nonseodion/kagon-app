import React from "react";
import "./footer.scss";

import logo from "../../assets/images/logo-png-white.png";

export default function Footer() {
  return (
    <footer>
      <div className='quarter'>
        <img src={logo} alt='' className='logo' />
      </div>
      <div className='quarter'>
        <p className='jos'>Contact</p>
        <ul>
          <li>Address: No 12 Chevron drive Lekki Lagos</li>
          <li>Phone: 09099889988</li>
          <li>Email: hello@kagon.com</li>
        </ul>
      </div>
      <div className='quarter'>
        <p className='jos'>Quick links</p>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </div>
      <div className='quarter'>
        <p className='jos'>Other links</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms and conditions</li>
          <li>Faq's</li>
        </ul>
      </div>
    </footer>
  );
}
