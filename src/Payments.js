import React from "react";
import "./Payments.css";

function Payments() {
  const payments = [
    {
      src: "icons/LTC.png",
      currency: "LTC",
      amount: "+15.08 USD",
      users: ["icons/user1.png", "icons/user2.png", "icons/firstuser.png"],
      time: "09/28/2020 19:22",
    },
    {
      src: "icons/Link.png",
      currency: "LINK",
      amount: "+957.96 USD",
      users: ["icons/user3.png", "icons/user4.png", "icons/seconduser.png"],
      time: "09/28/2020 19:22",
    },
  ];

  const wallets = [
    {
      src: "icons/walletBTE.png",
      name: "BTE",
      fullName: "Bitcoin",
      percent: "37%",
      variance: "-2.5%",
      positive: true,
    },
    {
      src: "icons/walletDAI.png",
      name: "DAI",
      fullName: "Dai",
      percent: "23%",
      variance: "+7.2%",
      positive: false,
    },
    {
      src: "icons/walletXRP.png",
      name: "XRP",
      fullName: "Ripple",
      percent: "20%",
      variance: "-3.1%",
      positive: true,
    },
    {
      src: "icons/walletUSDT.png",
      name: "USDT",
      fullName: "Tether",
      percent: "17%",
      variance: "+1.8%",
      positive: false,
    },
  ];

  return (
    <aside className="right-sidebar">
      <section className="payments">
        <div className="payments-header">
          <h2>Payments</h2>
          <button className="btn">Clear</button>
        </div>
        <div className="payments-cards">
          {payments.map((payment) => {
            return (
              <div
                className={`payment-card ${payment.currency.toLowerCase()}`}
                key={payment.currency}
              >
                <div
                  className={`currency-circular-container ${
                    "currency-" + payment.currency.toLowerCase()
                  }`}
                >
                  <img src={payment.src} alt={payment.currency}></img>
                </div>
                <p className="payment-received">
                  Received {payment.currency}
                  <span>
                    <i class="fa fa-solid fa-angle-down"></i>
                  </span>
                </p>
                <div className="payment-amount">{payment.amount}</div>
                <div className="payment-time">{payment.time}</div>
                {payment.users.map((user, index) => {
                  return (
                    <div className={`user${index}`}>
                      <img src={user}></img>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="payments-add">
          <div className="edit-container">
            <img src="icons/edit.png"></img>
          </div>
          <img className="addDark" src="icons/addDark.png"></img>
          <button className="newButton">New Transfer</button>
        </div>
      </section>
      <section className="wallets">
        <div className="wallets-header">
          <h2>Wallets</h2>
        </div>
        <div className="wallet-list">
          {wallets.map((wallet, index) => {
            return (
              <div className="wallet-row">
                <div
                  className={`wallet-icon-container ${
                    "wallet-" + wallet.name.toLowerCase()
                  }`}
                >
                  <img src={wallet.src}></img>
                </div>
                <div className="wallet-info">
                  <p className="name">{wallet.name}</p>
                  <p className="fullName">{wallet.fullName}</p>
                </div>
                <div className="wallet-stat">
                  <p className="percent">{wallet.percent}</p>
                  <p
                    className={`variance ${wallet.positive ? "positive" : ""}`}
                  >
                    {wallet.variance}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
}

export default Payments;
