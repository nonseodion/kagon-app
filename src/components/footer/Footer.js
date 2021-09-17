import React from "react";
import "./footer.scss";

import logo from "../../assets/images/logo-png-white.png";

import google from "../../assets/images/playstore.svg";
import apple from "../../assets/images/app-store.svg";

import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import ig from "../../assets/images/ig.svg";

export default function Footer() {
  return (
    <footer>
      <div className='quarter wide'>
        {/* <img src={logo} alt='' className='logo' /> */}

        <p className='jos'>Mobile app</p>
        <div className='icons'>
          <div className='icon'>
            <img src={apple} alt='' />
            <div className='texts'>
              <p>Download from the</p>
              <span>App Store</span>
            </div>
          </div>
          <div className='icon'>
            <img src={google} alt='' />
            <div className='texts'>
              <p>Get it from</p>
              <span>App Store</span>
            </div>
          </div>
        </div>
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

      <div className='full'>
        <p className='jos'>Need help?</p>
        <p className='txt'>Contact support @ hello@kagon.com</p>
      </div>

      <div className='full no-bd'>
        <a href=''>
          <img src={facebook} alt='' />
        </a>
        <a href='https://twitter.com/kagonway'>
          <img src={twitter} alt='' />
        </a>
        <a href='https://www.instagram.com/kagonway/'>
          <img src={ig} alt='' />
        </a>
        <p>Copyright 2021</p>
      </div>
    </footer>
  );
}
