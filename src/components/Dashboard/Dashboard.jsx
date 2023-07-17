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

  return (
    <section className="dashboard">
      <marquee>
        <a>Ivan</a>
        <a>Sakwa</a>
        <a>Has</a>
        <a>written</a>
        <a>This</a>
      </marquee>

      <section className="dashboard-nav">
        <div className="affiliate">
          <div className="img-div">
            <img src={people}/>
          </div>
          <div>
            <p>Your Personal Affiliate Link:</p>
            <NavLink className="affiliate-link">https://forextradesacco.com/?ref=Username</NavLink>
          </div>
        </div>
        <NavLink className="user-sect">
          <p>Account Name</p>
          <img src={userLogo} />
        </NavLink>
      </section>

      <section className="dashboard-btns">
        {links.map(link => 
          <NavLink
          key={link.id}
          to={link.path}
          >
            {link.name}
          </NavLink>
        )}
      </section>

      <section className="dashboard-cashCards">
        {BankInfo.map(info =>
            <div key={info.id}>
              <h4>{info.title}</h4>
              <img src={info.logo}/>
              <h2>{info.amount}</h2>
              <NavLink>{info.btnTitle}</NavLink>               
            </div>
          )}
      </section>

      <section className="dashboard-sponsors">
        <img src={sponsors}/>
      </section>

      <footer className="dashboard-footer">
        <div>&#169; 2023. <NavLink>FOREX TRADE SACCO</NavLink> ALL RIGHTS RESERVED </div>
      </footer>

    </section>
  )
}

export default Dashboard;