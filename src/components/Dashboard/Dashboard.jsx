// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from "react-router-dom"
import people from "./Assets/switch.svg"
import bankLogo from "./Assets/bank.svg"
import cashLogo from "./Assets/money.svg"
import sponsors from "./Assets/sponsors.svg"
import userLogo from "./Assets/user.svg"
import "./Dashboard.css"

const Dashboard = () => {
  const links = [
    {id: 1, name: "DEPOSIT", path: "/"},
    {id: 2, name: "WITHDRAW", path: "/"},
    {id: 3, name: "YOUR DEPOSITS", path: "/"},
    {id: 4, name: "REFFERALS", path: "/"},
    {id: 5, name: "SETTINGS", path: "/"},
    {id: 6, name: "SECURITY", path: "/"},
    {id: 7, name: "LIVE TRADING", path: "/"}
  ]

  const BankInfo = [
    {id: 1, title: "ACCOUNT BALANCE", logo: `${bankLogo}`, amount: "$0.00", btnTitle: "REQUEST PAYMENT"},
    {id: 2, title: "EARNED TOTAL", logo: `${cashLogo}`, amount: "$0.00", btnTitle: "MAKE DEPOSIT"},
    {id: 3, title: "ACCOUNT BALANCE", logo: `${bankLogo}`, amount: "$0.00", btnTitle: "REQUEST PAYMENT"},
    {id: 4, title: "EARNED TOTAL", logo: `${cashLogo}`, amount: "$0.00", btnTitle: "MAKE DEPOSIT"}
  ]

  const moneyInfo = [
    {id: 2, name: "BTC/USD", value: "30153", crement: "-144(-0.48%)"},
    {id: 1, name: "EUR/USD", value: "1.10059", crement: "+0.00220(+0.20%)"},
    {id: 3, name: "KSH/USD", value: "140.7", crement: "-8.3(-0.03%)"},
    {id: 4, name: "ETH/USD", value: "1908.1", crement: "+18.3(+0.97%)"},
    {id: 5, name: "KSH/USD", value: "140.7", crement: "-8.3(-0.03%)"},
    {id: 6, name: "ETH/USD", value: "1908.1", crement: "+18.3(+0.97%)"},
    {id: 7, name: "ETH/USD", value: "1908.1", crement: "+18.3(+0.97%)"},
    {id: 8, name: "KSH/USD", value: "140.7", crement: "-8.3(-0.03%)"},
  ]


  return (
    <section className="dashboard">
      <marquee>
        {moneyInfo.map(money =>
            <span
            key={money.id}
            style={{
              color: money.crement.includes("-") ? "#8B0000" : "#006400",
            }}
            >
              {money.name}&nbsp;&nbsp;{money.value}&nbsp;&nbsp;{money.crement}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
            </span>
          )}
      </marquee>

      <section className="dashboard-nav">
        <div className="affiliate">
          <div className="img-div">
            <img src={people}/>
          </div>
          <div>
            <p>Your Personal Affiliate Link:</p>
            <NavLink target="_blank" className="affiliate-link">https://forextradesacco.com/?ref=Username</NavLink>
          </div>
        </div>
        <NavLink className="user-sect">
          <p>Account Name</p>
          <img src={userLogo} />
        </NavLink>
      </section>

      <section className="dashboard-main">    
        <section className="dashboard-btns">
          {links.map(link => 
            <NavLink
            key={link.id}
            to={link.path}
            className="btn"
            >
              <p>{link.name}</p>
            </NavLink>
          )}
        </section>

        <section className="dashboard-cashCards">
            {BankInfo.map(info =>
                <div key={info.id}>
                  <h4>{info.title}</h4>
                  <img src={info.logo}/>
                  <h2>{info.amount}</h2>
                  <NavLink className="card-btn"><p>{info.btnTitle}</p></NavLink>               
                </div>
              )}
        </section>
      </section>

      <section className="dashboard-sponsors">
        <img src={sponsors}/>
      </section>

      <footer className="dashboard-footer">
        <div>&#169; 2023. <NavLink className="footer-btn">FOREX TRADE SACCO</NavLink> ALL RIGHTS RESERVED </div>
      </footer>

    </section>
  )
}

export default Dashboard;