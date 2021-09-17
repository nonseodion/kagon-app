import React, { useContext, useState } from "react";
import "./Nav.scss";

import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user_.svg";
import face from "../../assets/images/face.svg";
import logowhite from "../../assets/images/logo-white.svg";
import { Link } from "react-router-dom";
import { appContext } from "../../store/appContext";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

export default withRouter(function Nav({ blue, history }) {
  const context = useContext(appContext);
  const { isLoggedIn, userInfo, updateStateValue } = context;
  const [isOpen, setisOpen] = useState(false);

  const logout = () => {
    history.push("/login");
    updateStateValue({ isLoggedIn: false, userInfo: {} });
    sessionStorage.removeItem("kagon_token");
  };

  return (
    <div
      className='nav'
      style={{
        background: blue ? "#065DB5" : "#ffffff",
        color: blue ? "#fff" : "#000",
      }}
    >
      {!isLoggedIn ? (
        <>
          <div className='left'>
            <Link to='/'>
              <img src={blue ? logowhite : logo} alt='' className='logo' />
            </Link>
            <div className='nav-links'>
              {/* <span>Prices</span> */}
              <span>Company</span>
              <span className='price'>BTC/NGN 42,123.32</span>
            </div>
          </div>

          <div className={`links ${isOpen ? "open" : ""}`}>
            <div className='nav-links'>
              {/* <span>Prices</span> */}
              <span>Company</span>
              <span className='price'>BTC/NGN 42,123.32</span>
            </div>
            <Link to='/login'>
              <button className='sec-btn'>
                <span className='login'>Sign in</span>
              </button>
            </Link>

            <Link to='/signup'>
              <button className='main-btn'>Sign up</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className='left'>
            <Link to='/'>
              <img src={blue ? logowhite : logo} alt='' className='logo' />
            </Link>
          </div>

          <div className={`links ${isOpen ? "open" : ""}`}>
            <Link to='/dashboard'>
              <span
                onClick={() => setisOpen(!isOpen)}
                className={`link-text active ${blue ? "blue" : ""}`}
                // style={{
                //   background: blue ? "#065DB5" : "#ffffff",
                //   color: blue ? "#fff" : "#000",
                // }}
              >
                Home
              </span>
            </Link>

            <Link to='/dashboard/wallets'>
              <span
                onClick={() => setisOpen(!isOpen)}
                className={`link-text ${blue ? "blue" : ""}`}
              >
                Wallets
              </span>
            </Link>

            <Link>
              <span
                onClick={() => setisOpen(!isOpen)}
                className={`link-text ${blue ? "blue" : ""}`}
              >
                Company
              </span>
            </Link>

            {/* <Link>
              <span
                onClick={() => setisOpen(!isOpen)}
                className={`link-text ${blue ? "blue" : ""}`}
              >
                Prices
              </span>
            </Link> */}

            {isLoggedIn && (
              <span
                className={`link-text ${blue ? "blue" : ""}`}
                style={{
                  color: "#065DB5",
                  border: "1px solid #065DB5",
                  padding: "4px 10px",
                  borderRadius: 5,
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <img src={user} alt='' style={{ width: 12, marginRight: 5 }} />
                {userInfo.display_name}

                <div className='inner-menu'>
                  <div className='face'>
                    <img src={face} alt='' />
                  </div>
                  <p className='name'>{userInfo.display_name}</p>
                  <p className='email'>{userInfo.email}</p>

                  <Link to='/dashboard/settings' style={{ width: "100%" }}>
                    <div className='item'>Settings</div>
                  </Link>
                  <div className='item'>Help</div>
                  <div className='item logout' onClick={logout}>
                    Logout
                  </div>
                </div>
              </span>
            )}
          </div>
        </>
      )}

      <div
        id='nav-icon1'
        onClick={() => setisOpen(!isOpen)}
        className={`${isOpen ? "open" : ""} ${blue ? "blue" : "white"}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
});
