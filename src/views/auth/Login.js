import React, { useContext, useState } from "react";
import "./auth.scss";

import axios from "axios";

import { Link, withRouter } from "react-router-dom";
import Nav from "../../components/nav/Nav";

import loader from "../../assets/images/loader.svg";
import { login, fetchWallets } from "../../services/apiservices";
import { appContext } from "../../store/appContext";
import Alert from "../../components/alert/Alert";

export default withRouter(function Login({ history }) {
  const context = useContext(appContext);
  const { updateStateValue } = context;
  const [loading, setLoading] = useState(false);
  const [loginData, setloginData] = useState({
    email: "hello@kagon.io",
    password: "password",
  });
  const [alertInfo, setalertInfo] = useState({
    message: "",
    open: false,
    type: "info",
  });

  const loginHandler = () => {
    if (loginData.email && loginData.password) {
      setLoading(true);
      login(loginData)
        .then((res) => {
          console.log(res);
          updateStateValue({ userInfo: res.data.data.user, isLoggedIn: true });
          let token = res.data.data.token;
          sessionStorage.setItem("kagon_token", token);
          axios.defaults.headers["x-access-token"] = `${token}`;
          fetchData();
        })
        .catch((err) => {
          console.log({ err });
          setLoading(false);
        });
    } else {
      setalertInfo({
        message: "Please fill in all fields",
        open: true,
        type: "error",
      });
    }
  };

  const fetchData = () => {
    fetchWallets()
      .then((res) => {
        console.log(res.data);
        updateStateValue({ wallets: res.data.data });
        history.push("/dashboard");
      })
      .catch((err) => console.log({ err }))
      .finally(() => setLoading(false));
  };

  return (
    <div className='auth'>
      <Nav blue={true} />

      <Alert
        type={alertInfo.type}
        message={alertInfo.message}
        open={alertInfo.open}
      />
      <p className='page-title' style={{ marginTop: 150 }}>
        Sign in to Kagon
      </p>
      <div className='box login'>
        <p className='label'>Username</p>
        <input
          type='text'
          onChange={(e) =>
            setloginData({
              ...loginData,
              email: e.target.value,
            })
          }
          value={loginData.email}
        />

        <p className='label'>Password</p>
        <input
          type='password'
          onChange={(e) =>
            setloginData({
              ...loginData,
              password: e.target.value,
            })
          }
          value={loginData.password}
        />

        <Link to='/forgot-password'>
          <p className='forgot'>forgot password?</p>
        </Link>

        <button className='main-btn' onClick={loginHandler}>
          {!loading ? (
            <span>Login</span>
          ) : (
            <img src={loader} style={{ width: 20 }} alt='' />
          )}
        </button>
        <p className='dont'>
          I do not have an account? <Link to='/signup'>Signup</Link>
        </p>
      </div>
    </div>
  );
});
