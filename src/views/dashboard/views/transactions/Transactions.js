import React, { useState } from "react";
import "./transactions.scss";

import inn from "../../../../assets/images/in.svg";
import out from "../../../../assets/images/out.svg";

export default function Transactions() {
  const [transactions, setTransactions] = useState([1, 2, 3, 4, 5]);
  return (
    <div className='tnxs'>
      <div className='has-tnx'>
        <div className='balances'>
          <div className='bal'>
            <p className='cav jos'>Your Balance</p>
            <p className='amt'> ₦159,945,250.98</p>
          </div>
        </div>

        {transactions.map((tnx, i) => (
          <div className='tnx'>
            <div className='left'>
              {i % 2 ? <img src={inn} /> : <img src={out} />}
              <div className='details'>
                <p className='big'>
                  Add funds {i % 3 && <span className='tag'>pending</span>}{" "}
                </p>
                <p className='small'>Bank transfer · 22 Jan,2021 11:00 am</p>
              </div>
            </div>
            <div className='right'>
              <p className='big'>₦98,500.08</p>
              {/* <p className='small'>Completed</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
