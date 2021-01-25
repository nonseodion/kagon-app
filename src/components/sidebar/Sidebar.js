import React, { useContext, useState } from "react";

import "./Sidebar.scss";
import { withRouter } from "react-router-dom";
import logo from "../../assets/images/logo-png-white.png";
import userIcon from "../../assets/images/user.svg";

export default withRouter(function Sidebar({ width, setCurrentPage, history }) {
  const [sideOpen, setsideOpen] = useState(true);
  const [activeIndex, setactiveIndex] = useState(0);
  const icons = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style></style></defs><rect class="a" width="11" height="11" rx="3"/><rect class="a" width="11" height="11" rx="3" transform="translate(13)"/><rect class="a" width="11" height="11" rx="3" transform="translate(13 13)"/><rect class="a" width="11" height="11" rx="3" transform="translate(0 13)"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zM415.5 128h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"/><path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M464 249.93a10.58 10.58 0 00-9.36-9.94L429 235.84a5.42 5.42 0 01-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 012.63-5.85l22.78-12.65a10.35 10.35 0 005-12.83l-3.95-10.9a10.32 10.32 0 00-12.13-6.51l-25.55 5a5.51 5.51 0 01-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 01.44-6.5l17-19.64a10.42 10.42 0 00.39-13.76l-7.42-8.91a10.24 10.24 0 00-13.58-2l-22.37 13.43a5.39 5.39 0 01-6.39-.63c-2.47-2.17-5-4.26-7.37-6.19a5.45 5.45 0 01-1.72-6.21l9.26-24.4a10.35 10.35 0 00-4.31-13.07l-10.09-5.89a10.3 10.3 0 00-13.45 2.83L325 96.28a4.6 4.6 0 01-5.6 1.72c-.61-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 01-3.74-5.23l.39-26.07a10.48 10.48 0 00-8.57-10.88l-11.45-2a10.45 10.45 0 00-11.75 7.17L266 82.1a5.46 5.46 0 01-5.36 3.65h-9.75a5.5 5.5 0 01-5.3-3.67l-8.46-24.67a10.46 10.46 0 00-11.77-7.25l-11.47 2a10.46 10.46 0 00-8.56 10.79l.4 26.16a5.45 5.45 0 01-3.86 5.25c-2.29.89-7.26 2.79-9.52 3.63-2 .72-4.18-.07-5.94-2.1l-16.26-20A10.3 10.3 0 00156.69 73l-10.06 5.83A10.36 10.36 0 00142.31 92l9.25 24.34a5.54 5.54 0 01-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 01-6.35.64L114 115.74a10.4 10.4 0 00-13.61 2L93 126.63a10.31 10.31 0 00.37 13.75L110.45 160a5.42 5.42 0 01.45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 01-5.86 2.82l-25.51-4.93a10.34 10.34 0 00-12.14 6.51l-4 10.88a10.38 10.38 0 005 12.85l22.78 12.65a5.39 5.39 0 012.65 5.92l-.24 1.27c-.52 2.79-1 5.43-1.46 8.24a5.48 5.48 0 01-4.46 4.64l-25.69 4.15A10.42 10.42 0 0048 250.16v11.58A10.26 10.26 0 0057.16 272l25.68 4.14a5.41 5.41 0 014.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 01-2.63 5.85l-22.77 12.67a10.35 10.35 0 00-5 12.83l4 10.9a10.33 10.33 0 0012.13 6.51l25.55-4.95a5.49 5.49 0 015.82 2.81c1.5 2.8 3.11 5.63 4.8 8.42a5.58 5.58 0 01-.44 6.5l-17 19.63a10.41 10.41 0 00-.5 13.77l7.41 8.91a10.23 10.23 0 0013.58 2l22.37-13.43a5.39 5.39 0 016.39.63c2.48 2.17 5 4.26 7.37 6.19a5.47 5.47 0 011.73 6.21l-9.27 24.4a10.35 10.35 0 004.31 13.07l10.11 5.84a10.3 10.3 0 0013.45-2.82L187 415.92c1.4-1.73 3.6-2.5 5.23-1.84 3.48 1.44 5.81 2.25 9.94 3.63a5.44 5.44 0 013.75 5.23l-.4 26.05a10.5 10.5 0 008.57 10.88l11.45 2a10.43 10.43 0 0011.75-7.17l8.5-24.77a5.45 5.45 0 015.36-3.65h9.75a5.49 5.49 0 015.3 3.67l8.47 24.67a10.48 10.48 0 0010 7.41 9.74 9.74 0 001.78-.16l11.47-2a10.46 10.46 0 008.56-10.79l-.4-26.16a5.43 5.43 0 013.75-5.2c3.84-1.29 6.54-2.33 8.91-3.25l.6-.23c3.1-1.07 4.6.23 5.47 1.31l16.75 20.63A10.3 10.3 0 00355 439l10.07-5.83a10.35 10.35 0 004.31-13.1l-9.24-24.34a5.52 5.52 0 011.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 016.38-.62l22.39 13.4a10.39 10.39 0 0013.61-2l7.4-8.9a10.31 10.31 0 00-.37-13.75l-17.06-19.67a5.42 5.42 0 01-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.55 5.55 0 015.86-2.82l25.48 4.97a10.34 10.34 0 0012.14-6.51l3.95-10.88a10.37 10.37 0 00-5-12.84l-22.8-12.67a5.4 5.4 0 01-2.61-5.89l.24-1.27c.52-2.79 1-5.43 1.46-8.24a5.48 5.48 0 014.46-4.64l25.69-4.14a10.43 10.43 0 009.18-10.28v-11.71zm-282.45 94a15.8 15.8 0 01-25.47 2.66 135.06 135.06 0 01.42-181.65 15.81 15.81 0 0125.5 2.77l45.65 80.35a15.85 15.85 0 010 15.74zM256 391.11a134.75 134.75 0 01-28.31-3 15.81 15.81 0 01-10.23-23.36l46-80a15.79 15.79 0 0113.7-7.93h92.14a15.8 15.8 0 0115.1 20.53c-17.49 54.32-68.4 93.76-128.4 93.76zm7.51-163.9L218 147.07a15.81 15.81 0 0110.31-23.3 134 134 0 0127.69-2.88c60 0 110.91 39.44 128.37 93.79a15.8 15.8 0 01-15.1 20.53h-92a15.78 15.78 0 01-13.76-8z"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="22.171" height="24.5" viewBox="0 0 22.171 24.5"><defs><style>.a{opacity:0.996;}.b{stroke-width: 1px;}</style></defs><g class="a" transform="translate(0.257 0.25)"><path class="b" d="M8.016,21.187v-.023a.8.8,0,0,0-.515-.752,9.038,9.038,0,0,1-2.378-1.385.813.813,0,0,0-.914-.082l0,0A2.824,2.824,0,0,1,.367,17.887a2.8,2.8,0,0,1,1.066-3.83l.012-.007a.8.8,0,0,0,.4-.8,9.164,9.164,0,0,1,.007-2.579.814.814,0,0,0-.409-.815l-.014-.01A2.8,2.8,0,0,1,.367,6.019,2.825,2.825,0,0,1,4.2,4.957l.056.032a.815.815,0,0,0,.913-.08A9.011,9.011,0,0,1,7.5,3.566a.808.808,0,0,0,.518-.754,2.813,2.813,0,1,1,5.626,0v.018a.808.808,0,0,0,.515.752,9.048,9.048,0,0,1,2.3,1.339.812.812,0,0,0,.914.083l.083-.047a2.826,2.826,0,0,1,3.839,1.061,2.808,2.808,0,0,1-1.066,3.83l-.065.036a.8.8,0,0,0-.4.8,9.091,9.091,0,0,1,.094,1.3,9.267,9.267,0,0,1-.084,1.238.8.8,0,0,0,.4.8l.058.032a2.808,2.808,0,0,1,1.063,3.829,2.825,2.825,0,0,1-3.836,1.062l-.034-.019a.815.815,0,0,0-.919.086A9.054,9.054,0,0,1,14.154,20.4a.8.8,0,0,0-.512.75v.042a2.813,2.813,0,0,1-5.626,0ZM6.3,17.569a7.158,7.158,0,0,0,1.885,1.1,2.67,2.67,0,0,1,1.705,2.5v.023a.937.937,0,1,0,1.874,0v-.042a2.672,2.672,0,0,1,1.693-2.492,7.132,7.132,0,0,0,1.862-1.093,2.679,2.679,0,0,1,3.026-.26l.03.018a.946.946,0,0,0,1.283-.355.932.932,0,0,0-.355-1.272s0,0,0,0l-.059-.032a2.66,2.66,0,0,1-1.333-2.684,7.474,7.474,0,0,0,.066-.984,7.264,7.264,0,0,0-.074-1.034,2.687,2.687,0,0,1,1.332-2.7l.067-.038a.93.93,0,0,0,.359-1.273.947.947,0,0,0-1.285-.354l-.079.046a2.681,2.681,0,0,1-3.013-.25,7.147,7.147,0,0,0-1.822-1.062,2.674,2.674,0,0,1-1.7-2.494V2.813a.937.937,0,1,0-1.874,0,2.672,2.672,0,0,1-1.709,2.5A7.153,7.153,0,0,0,6.341,6.376a2.681,2.681,0,0,1-3.007.245L3.28,6.589A.945.945,0,0,0,2,6.944a.93.93,0,0,0,.355,1.271l0,0,.014.008a2.7,2.7,0,0,1,1.337,2.716,7.242,7.242,0,0,0-.076,1.045,7.352,7.352,0,0,0,.07,1A2.656,2.656,0,0,1,2.37,15.68l-.016.01A.931.931,0,0,0,2,16.962a.947.947,0,0,0,1.285.354s0,0,0,0a2.675,2.675,0,0,1,3.016.256Zm3.737-3.606v-.006a.2.2,0,0,0-.131-.191,2.335,2.335,0,0,1-.6-.353.207.207,0,0,0-.233-.02h0a.711.711,0,0,1-.35.091.719.719,0,0,1-.625-.361.716.716,0,0,1,.271-.974h0a.207.207,0,0,0,.1-.2,2.383,2.383,0,0,1-.023-.32,2.234,2.234,0,0,1,.025-.335.209.209,0,0,0-.1-.208l0,0a.715.715,0,0,1-.271-.973.719.719,0,0,1,.976-.27l.014.008a.208.208,0,0,0,.233-.02,2.3,2.3,0,0,1,.59-.342.2.2,0,0,0,.132-.191.715.715,0,0,1,1.43,0v0a.205.205,0,0,0,.131.191,2.321,2.321,0,0,1,.584.341.208.208,0,0,0,.233.02l.02-.011a.719.719,0,0,1,.977.269.716.716,0,0,1-.271.974l-.017.008a.205.205,0,0,0-.1.2,2.352,2.352,0,0,1,.024.331,2.281,2.281,0,0,1-.022.314.207.207,0,0,0,.1.2l.014.007a.716.716,0,0,1,.271.974.719.719,0,0,1-.976.27l-.008,0a.207.207,0,0,0-.234.022,2.319,2.319,0,0,1-.6.35.2.2,0,0,0-.13.191v.011a.715.715,0,0,1-1.43,0Z"/></g></svg>`,
  ];
  const links = [
    {
      text: "Dashboard",
      link: "/dashboard/",
      name: "Dashboard",
    },
    {
      text: "Wallets",
      link: "/dashboard/wallets",
      name: "Dashboard",
    },
    {
      text: "Settings",
      link: "/dashboard/settings",
      name: "Settings",
    },
  ];

  const goToLink = (i) => {
    setactiveIndex(i);
    setCurrentPage(links[i].text);
    history.push(links[i].link);
  };

  const [wideNav, setWideNav] = useState(true);

  const logoutHandler = () => {
    history.push("/login");
  };

  return (
    <div
      className='sidebar'
      style={{
        width: wideNav ? width : 65,
      }}
    >
      <div className='top'>
        {/* <img src={sideOpen ? logo : icon} alt='' /> */}
        <img src={logo} alt='' />{" "}
        {/* <div className='caret' onClick={() => setWideNav(!wideNav)}> */}
        {/* <LeftOutlined style={{ color: "#fff", fontSize: 6 }} /> */}
        {/* </div> */}
      </div>
      <div className='mid' style={{ textAlign: "center" }}>
        <img
          src={userIcon}
          style={{
            width: 50,
            margin: "40px auto 4px",
          }}
          alt=''
        />
        <p
          className='bw-b'
          style={{
            color: "#038ccc",
            fontWeight: "600",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Olawale Ariyo
        </p>
      </div>
      <ul className='links'>
        {links.map((link, i) => (
          <li key={`link${i}`}>
            <div
              onClick={() => goToLink(i)}
              className={`main-link pointer ${
                i === activeIndex ? "active-link" : ""
              }`}
            >
              <span dangerouslySetInnerHTML={{ __html: icons[i] }}></span>
              <span className='bw-m' style={{ opacity: wideNav ? 1 : 0 }}>
                {link.text}
              </span>
            </div>
          </li>
        ))}

        <li
          style={{
            position: "absolute",
            bottom: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={logoutHandler}
        >
          {/* <LogoutOutlined
            style={{
              fontSize: 20,
              color: "red",
              marginLeft: 15,
              cursor: "pointer",
              marginRight: 5,
            }}
          />{" "} */}
          <span style={{ color: "red", marginLeft: 30 }}>Logout</span>
        </li>
      </ul>
    </div>
  );
});
