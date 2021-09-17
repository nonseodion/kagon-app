import React, { useContext, useEffect, useState } from "react";
import "./Settings.scss";

import { withRouter } from "react-router-dom";

import caret from "../../../../assets/images/caret.svg";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import QRCode from "react-qr-code";
import { appContext } from "../../../../store/appContext";
import numeral from "numeral";

export default withRouter(function Settings({ history }) {
  const context = useContext(appContext);
  const { wallets } = context;

  return (
    <div className='wallets-wrap'>
      <p className='jos title' style={{ marginTop: 170 }}>
        Settings
      </p>

      <div className='wallets' style={{ marginTop: 20 }}>
        <div className='tnx'>
          <div className='left'>
            <p>Profile</p>
          </div>
          <div className='right'>
            <img src={caret} alt='' />
          </div>
        </div>
        <div className='tnx'>
          <div className='left'>
            <p>Preferences</p>
          </div>
          <div className='right'>
            <img src={caret} alt='' />
          </div>
        </div>
        <div className='tnx'>
          <div className='left'>
            <p>Security</p>
          </div>
          <div className='right'>
            <img src={caret} alt='' />
          </div>
        </div>
        <div className='tnx'>
          <div className='left'>
            <p>Payment methods</p>
          </div>
          <div className='right'>
            <img src={caret} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
});
