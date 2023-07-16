// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from "react-router-dom"
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
    {id: 1, title: "ACCOUNT BALANCE", logo: "someimage", amount: "$0.00", btnTitle: "REQUEST PAYMENT"},
    {id: 2, title: "EARNED TOTAL", logo: "someimage", amount: "$0.00", btnTitle: "MAKE DEPOSIT"},
    {id: 3, title: "ACCOUNT BALANCE", logo: "someimage", amount: "$0.00", btnTitle: "REQUEST PAYMENT"},
    {id: 4, title: "EARNED TOTAL", logo: "someimage", amount: "$0.00", btnTitle: "MAKE DEPOSIT"}
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
        <p>Pic</p>
        <p>Your Personal Affiliate Link:</p>
        <NavLink>https://forextradesacco.com/?ref=Username</NavLink>
        <NavLink>
          <p>Account Name</p>
          <p>pic</p>
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
              <p>{info.logo}</p>
              <h2>{info.amount}</h2>
              <NavLink>{info.btnTitle}</NavLink>               
            </div>
          )}
      </section>

      <section className="dashboard-sponsors">
        sponsors
      </section>

      <footer className="dashboard-footer">
        <div>&#169; 2023. <NavLink>FOREX TRADE SACCO</NavLink> ALL RIGHTS RESERVED </div>
      </footer>

    </section>
  )
}

export default Dashboard;