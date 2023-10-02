// eslint-disable-next-line no-unused-vars
import React from 'react';
import phone from "./assets/phone.png";
import "./CSS/Landing.css"
// import Invest from './assets/invest.svg'
// import slides from './assets/slides.svg'

const Landingpage = () => {
  return (
    <div className="hero">
      <div className="container">
        <h3 className="description">BRAND NEW ONLINE <br /> TRADING PLATFORM</h3>
        <h1 className="title">INVEST</h1>
        <h2 className="subtitle">FROM YOUR COMFORT</h2>
        <img className='img' src={phone} alt="Trading platform image" />
        <button className="button">Trade Now</button>
      </div>
    </div>

  )
}

export default Landingpage;