import React from "react";
import "./Content.css";

function Content() {
  const coins = [
    {
      name: "Bitcoin",
      src: "img/bitcoin.png",
      value: "0.2231345 BTC",
      convert: "11,032.24 USD",
    },
    {
      name: "Etherium",
      src: "img/etherium.png",
      value: "10.612356 ETH",
      convert: "1242.31 USD",
    },
    {
      name: "Litecoin",
      src: "img/litecoin.png",
      value: "120.235 BTC",
      convert: "37,747.78 USD",
    },
  ];

  const activity = [
    {
      src: "icons/insurance.png",
      info: [
        { term: "Insurance", type: "Property Coverage" },
        { term: "LTC Wallet", type: "Personal Account" },
        { term: "7 Jun, 21", type: "Last Payment" },
        { term: "-10.24 LTC", type: "Balance" },
      ],
    },
    {
      src: "icons/electricity.png",
      info: [
        { term: "Electricity", type: "Utility payments" },
        { term: "ETH Wallet", type: "Personal Account" },
        { term: "9 Jun, 21", type: "Last Payment" },
        { term: "-3.543 ETH", type: "Balance" },
      ],
    },
  ];

  return (
    <div className="content-container">
      <div className="content-header-search">
        <img src="icons/search.png"></img>
        <input placeholder="Search..."></input>
      </div>
      <div className="content-cards">
        <h2>Hi ,Daniel</h2>
        <div className="content-cards-container">
          {coins.map((coin, index) => {
            return (
              <div className="content-card" key={index}>
                <p>{coin.name}</p>
                <i className="fa-solid fa-ellipsis-vertical"></i>
                <img src={coin.src}></img>
                <h3>{coin.value}</h3>
                <small>{coin.convert}</small>
              </div>
            );
          })}
        </div>
      </div>
      <div className="content-card-scroll"></div>
      <div className="content-activity">
        <div className="content-activity-header">
          <div className="activity-heading">
            <h2>Latest Activity</h2>
            <p>Updated 12 minutes ago</p>
            <a href="#" target="_blank">
              edit
            </a>
          </div>
          <div className="activity-header-icons">
            <div className="activity-icon-container">
              <img src="icons/settings.png"></img>
            </div>
            <div className="activity-icon-container bg-primary">
              <img src="icons/add.png"></img>
            </div>
          </div>
        </div>
        <div className="content-activity-info">
          {activity.map((act) => {
            return (
              <>
                <div className="info-row" key={act.info[0].term}>
                  <div
                    className={`info-icon-container ${act.info[0].term.toLowerCase()}`}
                  >
                    <img src={act.src} alt={act.info[0].term}></img>
                  </div>
                  <>
                    {act.info.map((detail) => {
                      return (
                        <div className="activity-info-details">
                          <h4 className="info-term">{detail.term}</h4>
                          <p className="info-type">{detail.type}</p>
                        </div>
                      );
                    })}
                  </>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
