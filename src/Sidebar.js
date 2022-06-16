import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const icons = [
    { src: "icons/menu.png", label: "Dashboard" },
    { src: "icons/Calculator.png", label: "Calculator" },
    { src: "icons/Wallet.png", label: "Wallets" },
    { src: "icons/Savings.png", label: "Savings" },
    { src: "icons/Currencies.png", label: "Currencies" },
    { src: "icons/Expenses.png", label: "Expenses" },
    { src: "icons/Upcoming.png", label: "Upcoming" },
    { src: "icons/Food.png", label: "Food" },
    { src: "icons/Health.png", label: "Health" },
    { src: "icons/Account.png", label: "Account" },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h1>NAPSES</h1>
      </div>
      <div className="sidebar-buttons"></div>
      <div className="sidebar-menu-container">
        {icons.map((item, index) => {
          if (item.label == "Dashboard") {
            return (
              <div key={index} className="sidebar-menu ">
                <div className="sidebar-menu-icon is-active">
                  <img src={item.src} />
                </div>
                <p className="sidebar-menu-info">{item.label}</p>
              </div>
            );
          }
          return (
            <div key={index} className="sidebar-menu">
              <div className="sidebar-menu-icon">
                <img src={item.src} className="sidebar-menu" />
              </div>
              <p className="sidebar-menu-info">{item.label}</p>
            </div>
          );
        })}
      </div>
      <div className="sidebar-card-container">
        <div className="sidebar-card">
          <img src="img/3d_element.png" alt="3d-article" />
          <button className="btn bg-light">Get Pro Now</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
