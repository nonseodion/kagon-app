import React, { useState } from "react";
import "./Wallets.scss";
import btc from "../../../../assets/images/btc.png";
import caret from "../../../../assets/images/caret.svg";
import { withRouter } from "react-router-dom";

export default withRouter(function Wallets({ history }) {
  const [wallets, setwallets] = useState([1, 2, 3, 4, 5, 6]);

  const goToWallet = () => {
    history.push("/dashboard/transactions");
  };

  return (
    <>
      <p className='jos title'>Wallets</p>
      <div className='wallets'>
        {wallets.map((Wallet) => (
          <div className='wallet' onClick={goToWallet}>
            <div>
              <img src={btc} alt='' className='icn' />
              <img src={caret} alt='' className='caret' />
            </div>
            {/* <p className='price'>12,359,234.70 NGN/BTC</p> */}
            <div className='balance'>
              <p className='jos'>0.12523.00 BTC</p>
              <span>Balance</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
