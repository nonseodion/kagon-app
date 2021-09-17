import React, { useEffect, useState } from "react";
import "./auth.scss";

import logo from "../../assets/images/logo-png-white.png";
import { Link, useParams, withRouter } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { signup } from "../../services/apiservices";
import Alert from "../../components/alert/Alert";

import loader from "../../assets/images/loader.svg";
import done from "../../assets/images/done.svg";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

export default withRouter(function Signup({ location }) {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [alertInfo, setalertInfo] = useState({
    message: "",
    open: false,
    type: "info",
  });
  const [signupData, setSignupData] = useState({
    email: location.search ? location.search.split("=")[1] : "",
    password: "",
    username: "",
    display_name: "",
    phone: "",
    firstname: "",
    lastname: "",
  });

  const signupHandler = () => {
    console.log({ signupData });
    let data = {
      ...signupData,
      display_name: `${signupData.firstname} ${signupData.lastname}`,
    };
    if (Object.values(data).includes("")) {
      setalertInfo({
        message: "Please fill in all fields",
        open: true,
        type: "error",
      });
      return;
    } else {
      setLoading(true);
      delete data["firstname"];
      delete data["lastname"];
      signup(data)
        .then((res) => {
          console.log(res);
          setCompleted(true);
        })
        .catch((err) => {
          console.log({ err });
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className='auth'>
      <Nav blue={true} />
      <Alert
        type={alertInfo.type}
        message={alertInfo.message}
        open={alertInfo.open}
      />

      {completed ? (
        <div className='box-wrap'>
          <div className='box signup'>
            <p
              className='jos'
              style={{
                border: 0,
                fontSize: 16,
                color: "#000000",
                textAlign: "center",
              }}
            >
              <img src={done} style={{ width: 150 }} alt='' />
              <br />
              Your account has been created successfully. Kindly login with your
              details to proceed
              <p style={{ marginTop: 30 }}>
                <Link to='/login'>
                  <span
                    style={{
                      padding: 10,
                      borderRadius: 4,
                      backgroundColor: "#065db5",
                      color: "#fff",
                    }}
                  >
                    Proceed
                  </span>
                </Link>
              </p>
            </p>
          </div>
        </div>
      ) : (
        <div className='box-wrap'>
          <p className='page-title'>Create your account</p>
          <div className='box signup'>
            <div className='row'>
              <div className='half'>
                <p className='label'>Firstname</p>
                <input
                  type='text'
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      firstname: e.target.value,
                    })
                  }
                />
              </div>
              <div className='half'>
                <p className='label'>Lastname</p>
                <input
                  type='text'
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      lastname: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className='row'>
              <div className='half'>
                <p className='label'>Username</p>
                <input
                  type='text'
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      username: e.target.value,
                    })
                  }
                />
              </div>
              <div className='half'>
                <p className='label'>Phone no.</p>
                <input
                  type='text'
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className=''>
              <p className='label'>Email address</p>
              <input
                type='text'
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <p className='label'>Password</p>
            <input
              type='password'
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  password: e.target.value,
                })
              }
            />

            <p className='forgot'>forgot password?</p>

            <button
              className='main-btn'
              onClick={signupHandler}
              disabled={loading}
            >
              {!loading ? (
                <span>Sign Up</span>
              ) : (
                <img src={loader} style={{ width: 20 }} alt='' />
              )}
            </button>

            <p className='dont'>
              I have an account <Link to='/login'>Login</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
});
