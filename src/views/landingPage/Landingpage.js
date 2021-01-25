import React from "react";
import Nav from "../../components/nav/Nav";
import "./Landingpage.scss";

import google from "../../assets/images/playstore.svg";
import apple from "../../assets/images/app-store.svg";

import cash from "../../assets/images/cash.svg";
import watch from "../../assets/images/watch.svg";
import guard from "../../assets/images/guard.svg";
import phone from "../../assets/images/phone.png";
import { Line } from "react-chartjs-2";
import Footer from "../../components/footer/Footer";

export default function Landingpage() {
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
            {/* <p>Download the kagon app</p> */}
            <div className='icons'>
              <div className='icon'>
                <img src={google} alt='' />
              </div>
              <div className='icon'>
                <img src={apple} alt='' />
              </div>
            </div>
          </div>
          <div className='charts'>
            <div className='coins'>
              <div className='coin picked'>BTC/NGN</div>
              <div className='coin'>BTC/USDT</div>
              <div className='coin'>BTC/ETH</div>
              <div className='coin'>BTC/XRP</div>
            </div>
            <Line
              height={300}
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: ["rgba(255, 255, 255, 0.7)"],
                    borderColor: ["#ffffff"],
                    borderWidth: 4,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                scales: {
                  xAxes: [
                    {
                      ticks: {
                        display: false, //this will remove all the x-axis grid lines
                      },
                      gridLines: {
                        color: "rgba(255, 255, 255, 0.1)",
                      },
                    },
                  ],
                  yAxes: [
                    {
                      ticks: {
                        fontColor: "#ffffff",
                        fontSize: 10,
                        stepSize: 10,
                        // display: false,
                      },
                      gridLines: {
                        color: "rgba(255, 255, 255, 0.1)",
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
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
          <p>
            You can download our mobile app from the app stores and access your
            wallets anywhere anytime.
          </p>
        </div>
        <div className='half'>
          <img src={phone} alt='' />
        </div>
      </div>
      <div className='table reverse'>
        <div className='half'>
          <img src={phone} alt='' />
        </div>
        <div className='half'>
          <p className='jos'>Trade on the go with our mobile app</p>
          <p>
            You can download our mobile app from the app stores and access your
            wallets anywhere anytime.
          </p>
        </div>
      </div>
      {/* <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Pair</th>
              <th>24Hr change</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((itm) => (
              <tr>
                <td>BTC/NGN</td>
                <td>+3.12%</td>
                <td>12,324,43.06</td>
                <td>12,324,43.06</td>
                <td>12,324,43.06</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <Footer />
    </div>
  );
}
