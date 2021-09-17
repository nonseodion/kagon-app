import React, { useContext, useEffect, useState } from "react";
import "./Wallets.scss";
import btc from "../../../../assets/images/btc.png";
import caret from "../../../../assets/images/caret.svg";
import { withRouter } from "react-router-dom";

import check from "../../../../assets/images/check.svg";
import bch from "../../../../assets/images/bch.svg";
import wallet from "../../../../assets/images/wallet.svg";
import ngn from "../../../../assets/images/ngn.svg";
import buy from "../../../../assets/images/buy.svg";
import sell from "../../../../assets/images/sell.svg";
import send from "../../../../assets/images/send.svg";
import edit from "../../../../assets/images/edit.svg";
import receieve from "../../../../assets/images/receive.svg";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import QRCode from "react-qr-code";
import { appContext } from "../../../../store/appContext";
import numeral from "numeral";

import { sendCoin } from "../../../../services/apiservices";

export default withRouter(function Wallets({ history }) {
  const context = useContext(appContext);
  const { wallets, coins } = context;

  const [open, setOpen] = useState(false);
  const [openSend, setOpenSend] = useState(false);
  const [openReceive, setOpenReceive] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [buying, setBuying] = useState(true);
  const [successful, setSuccessful] = useState(false);
  const [total, setTotal] = useState(0);
  const [sendInfo, setsendInfo] = useState({
    coinTicker: "",
    address: "",
    amount: "",
  });
  const [selectedCoin, setselectedCoin] = useState(
    coins.length ? coins[0].coinTicker : ""
  );
  const [tradeType, setTradeType] = useState("");

  useEffect(() => {
    let total = wallets.reduce((agg, curr) => {
      agg += numeral(curr.balance) * numeral(curr.coin.priceNaira);
      return agg;
    }, 0);
    setTotal(total);
  }, [wallets]);

  const completeTrade = () => {
    if (tradeType === "send") {
      sendCryptoHandler();
    }
    // setSuccessful(true)
  };

  const sendCryptoHandler = () => {
    let data = {
      ...sendInfo,
      coinTicker: selectedCoin,
    };
    console.log(data);
    sendCoin(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onOpenModal = (type) => {
    setSuccessful(false);
    setOpen(true);
    setTradeType(type);
  };
  const onCloseModal = () => setOpen(false);

  const onOpenSendModal = (type) => {
    setSuccessful(false);
    setOpenSend(true);
    setTradeType(type);
  };
  const onCloseSendModal = () => setOpenSend(false);

  const onOpenReceiveModal = () => {
    setSuccessful(false);
    setOpenReceive(true);
  };
  const onCloseReceiveModal = () => setOpenReceive(false);

  const onOpenConfirmModal = () => {
    onCloseModal(false);
    onCloseSendModal(false);
    onCloseReceiveModal(false);
    setOpenConfirm(true);
  };

  const onCloseConfirmModal = () => setOpenConfirm(false);

  const goToWallet = () => {
    history.push("/dashboard/transactions");
  };

  return (
    <div className='wallets-wrap'>
      <p className='jos title'>Total wallet balance</p>
      <p className='balance'>{numeral(total).format("0,0.00")} NGN</p>
      <div className='actions'>
        <div
          className='action'
          onClick={() => {
            onOpenModal("buy");
            setBuying(true);
          }}
        >
          <img src={buy} alt='' />
          <p>Buy</p>
        </div>
        <div
          className='action'
          onClick={() => {
            onOpenModal("sell");
            setBuying(false);
          }}
        >
          <img src={sell} alt='' />
          <p>Sell</p>
        </div>
        <div className='action' onClick={() => onOpenSendModal("send")}>
          <img src={send} alt='' />
          <p>Send</p>
        </div>
        <div className='action' onClick={onOpenReceiveModal}>
          <img src={receieve} alt='' />
          <p>Receive</p>
        </div>
      </div>
      <div className='wallets'>
        {wallets.map((wallet) => (
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
              <p className='small'>
                {numeral(
                  numeral(wallet.balance) * numeral(wallet.coin.priceNaira)
                ).format("0,0.00")}{" "}
                NGN
              </p>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={onCloseModal} center closeIcon={<></>}>
        <div className='buy-modal'>
          <p className='modal-title'>
            {buying ? "Buy" : "Sell"} Cryptocurrency
          </p>
          <p className='balance'>
            0.00942 <b>BTC</b>
          </p>
          <p className='ngn-balance'>NGN 250,000.00</p>
          <div className='fields'>
            <div className='roww top'>
              <div className='left'>Choose cryptocurrency</div>
              <div className='right'>
                <img src={bch} alt='' />
                <div className='select-wrapper'>
                  <select>
                    {coins.map((coin) => (
                      <option value={coin.coinTicker}>{coin.coinName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className='roww'>
              <div className='left'>{buying ? "Buy with" : "Sell for"}</div>
              <div className='right'>
                <img src={ngn} alt='' />
                <div className='select-wrapper'>
                  <select>
                    <option value='btc'>Nigerian Naira</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <button className='green-btn' onClick={onOpenConfirmModal}>
            {buying ? "Buy" : "Sell"}
          </button>
        </div>
      </Modal>

      <Modal
        open={openSend}
        onClose={onCloseSendModal}
        center
        closeIcon={<></>}
      >
        <div className='buy-modal'>
          <p className='modal-title'>Send Cryptocurrency</p>
          <p className='balance'>
            {sendInfo.amount} <b>{sendInfo.coinTicker}</b>
          </p>
          <p className='ngn-balance'>
            NGN{" "}
            {coins.length && sendInfo.amount
              ? coins.find((c) => c.coinTicker === selectedCoin).priceNaira *
                sendInfo.amount
              : 0}
          </p>
          <div className='fields'>
            <div className='roww top'>
              <div className='left'>Choose cryptocurrency</div>
              <div className='right'>
                <img
                  src={
                    coins.length
                      ? coins.find((c) => c.coinTicker === selectedCoin)
                          .imageUrl
                      : ""
                  }
                  alt=''
                />
                <div className='select-wrapper'>
                  <select onChange={(e) => setselectedCoin(e.target.value)}>
                    {coins.map((coin) => (
                      <option value={coin.coinTicker}>{coin.coinName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className='roww top'>
              <div className='left'>To</div>
              <div className='right'>
                <img src={wallet} alt='' />
                <input
                  onChange={(e) =>
                    setsendInfo({
                      ...sendInfo,
                      address: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='reciever address'
                />
              </div>
            </div>
            <div className='roww'>
              <div className='left'>Amount</div>
              <div className='right'>
                <img src={edit} alt='' />
                <input
                  onChange={(e) =>
                    setsendInfo({
                      ...sendInfo,
                      amount: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='Amount'
                />
              </div>
            </div>
          </div>

          <button onClick={onOpenConfirmModal} className='green-btn'>
            Send
          </button>
        </div>
      </Modal>

      <Modal
        open={openReceive}
        onClose={onCloseReceiveModal}
        center
        closeIcon={<></>}
      >
        <div className='buy-modal'>
          <p className='modal-title'>Send Cryptocurrency</p>
          <p className='balance'>
            0.00942 <b>BTC</b>
          </p>
          <p className='ngn-balance'>NGN 250,000.00</p>
          <QRCode value='hey' size={150} />
          <div className='fields' style={{ marginTop: 25 }}>
            <div className='roww top'>
              <div className='left'>Choose cryptocurrency</div>
              <div className='right'>
                <img src={bch} alt='' />
                <div className='select-wrapper'>
                  <select>
                    {coins.map((coin) => (
                      <option value={coin.coinTicker}>{coin.coinName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className='roww top'>
              <div className='left'>To</div>
              <div className='right'>
                <img src={wallet} alt='' />
                <span>351Ni3XKN7aM4291ULh5N5..</span>
              </div>
            </div>
            <div className='roww'>
              <div className='left'>Note</div>
              <div className='right'>
                <img src={edit} alt='' />
                <input type='text' placeholder='optional' />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={openConfirm}
        onClose={onCloseConfirmModal}
        center
        closeIcon={<></>}
      >
        {!successful ? (
          <div className='confirmation-modal'>
            <p className='title'>
              You are about to purchase{" "}
              <b>
                NGN{" "}
                {coins.length && sendInfo.amount
                  ? coins.find((c) => c.coinTicker === selectedCoin)
                      .priceNaira * sendInfo.amount
                  : 0}
              </b>{" "}
              worth of <b>{sendInfo.coinTicker}</b>
            </p>
            <button className='green-btn' onClick={completeTrade}>
              Confirm
            </button>
          </div>
        ) : (
          <div className='confirmation-modal'>
            <img src={check} alt='' />
            <h2>Transaction Successful</h2>
            <p className='sub-text'>You sold NGN 120,000.00 worth of BTC</p>
          </div>
        )}
      </Modal>
    </div>
  );
});
