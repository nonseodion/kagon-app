import React, { useContext, useEffect, useState } from "react";
import "./dashboardhome.scss";
import { Line } from "react-chartjs-2";

import btc from "../../../../assets/images/btc.png";
import bch from "../../../../assets/images/bch.svg";
import inn from "../../../../assets/images/in.svg";
import out from "../../../../assets/images/out.svg";
import { appContext } from "../../../../store/appContext";
import { fetchCoins } from "../../../../services/apiservices";

export default function DashboardHome() {
  const context = useContext(appContext);
  const { wallets, updateStateValue } = context;
  const [transactions, setTransactions] = useState([1, 2, 3, 4, 5]);
  const coins = [
    {
      name: "Bitcoin",
      symbol: "btc",
    },
    {
      name: "Ethereum",
      symbol: "eth",
    },
    {
      name: "Bitcoin Cash",
      symbol: "bch",
    },
  ];

  useEffect(() => {
    fetchCoins()
      .then((res) => {
        updateStateValue({ coins: res.data.data });
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div className='dashboard-home'>
      <div className='white-bg-wrap'></div>
      <div className='white-bg'>
        <Line
          height={100}
          data={{
            labels: ["Jan 1", "Feb 1", "Mar 1", "Apr 1", "May 1", "Jun 1"],
            datasets: [
              {
                label: "",
                data: [12000, 19000, 30000, 50000, 20000, 32000],
                backgroundColor: ["rgba(255, 255, 255, 0.7)"],
                borderColor: ["#FC7D58"],
                borderWidth: 4,
                lineTension: 0,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            bezierCurve: false,
            maintainAspectRatio: `${window.innerWidth > 767 ? false : true}`,
            legend: {
              display: false,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    fontColor: "#065db5",
                    fontSize: `${window.innerWidth > 767 ? 16 : 12}`,
                    display: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "#065db5",
                    fontSize: `${window.innerWidth > 767 ? 16 : 12}`,
                    display: true,
                    stepSize: 10000,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />

        <div className='coins'>
          {coins.map((coin) => (
            <div className={`coin ${coin.symbol === "btc" ? "picked" : ""}`}>
              <img src={btc} alt='' style={{ height: 30 }} />
              <span>{coin.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='wide'>
        <div className='half'>
          <div className='tnx' style={{ padding: 20 }}>
            Wallets
          </div>
          {wallets.map((wallet, i) => (
            <div className='tnx'>
              <div className='left'>
                <img
                  style={{ width: 30, height: 30 }}
                  src={wallet.coin.imageUrl}
                />
                <p>{wallet.coin.coinName}</p>
              </div>
              <div className='right'>
                <p className='big' style={{ margin: 0 }}>
                  {wallet.balance} {wallet.ticker}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='half'>
          <div className='tnx' style={{ padding: 20 }}>
            Transactions
          </div>
          {transactions.map((tnx, i) => (
            <div className='tnx'>
              <div className='left'>
                {i % 2 ? <img src={inn} /> : <img src={out} />}
                <div className='details'>
                  <p className='big'>Bank transfer</p>
                  <p className='small'>₦98,500.08 on 22 Jan,2021</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
