import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import "./Landingpage.scss";

import google from "../../assets/images/playstore.svg";
import apple from "../../assets/images/app-store.svg";
import humans from "../../assets/images/humans.svg";

import cash from "../../assets/images/cash.svg";
import watch from "../../assets/images/watch.svg";
import guard from "../../assets/images/guard.svg";
import phone from "../../assets/images/phones.jpeg";
import { Line } from "react-chartjs-2";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

export default function Landingpage() {
  const [email, setEmail] = useState("");
  return (
    <div className='landing-page'>
      <Nav />
      <div className='hero'>
        <div className='overlay'></div>
        <div className='hero-contents'>
          <div className='texts'>
            <h1>Start trading today with less fees and more trust</h1>
            <h4>
              Trading with kagon gives the best rates in the market and
              completes your trades in record time giving you the chance to
              focus on making gains
            </h4>
          </div>
          <div className='charts'>
            <img src={humans} />
          </div>
        </div>
      </div>

      <div className='hero-form'>
        <input
          placeholder='E-mail address'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Link to={`/signup?email=${email}`}>
          <button className='green-btn'>Sign up</button>
        </Link>
      </div>

      <div className='light-bg'>
        <p className='heading jos'>Enjoy the best experience on the market</p>
        <div className='row'>
          <div className='why'>
            <img src={cash} alt='' />
            <p className='title'>cheap fees</p>
            <p className='story'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              amet pariatur iusto. Perferendis id aliquam labore delectus
              assumenda officia. Voluptate doloremque fugit aliquam possimus
              explicabo sint, quasi earum repellat quia?
            </p>
          </div>
          <div className='why'>
            <img src={watch} alt='' />
            <p className='title'>Fastest trades</p>
            <p className='story'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              amet pariatur iusto. Perferendis id aliquam labore delectus
              assumenda officia. Voluptate doloremque fugit aliquam possimus
              explicabo sint, quasi earum repellat quia?
            </p>
          </div>
          <div className='why'>
            <img src={guard} alt='' />
            <p className='title'>Secure transactions</p>
            <p className='story'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              amet pariatur iusto. Perferendis id aliquam labore delectus
              assumenda officia. Voluptate doloremque fugit aliquam possimus
              explicabo sint, quasi earum repellat quia?
            </p>
          </div>
        </div>
      </div>

      <div className='table'>
        <div className='half'>
          <p className='jos'>Trade on the go with our mobile app</p>
          <p className='txt'>
            You can download our mobile app from the app stores and access your
            wallets anywhere anytime.
          </p>

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
        <div className='half'>
          <img src={phone} alt='' />
        </div>
      </div>

      <Footer />
    </div>
  );
}
