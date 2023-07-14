// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./plans.css";

const Plans = () => {
  return (
    <div>
      <section className='plans'> 
        <h1>OUR PLANS</h1>
      </section>

      <div className="cards-container">
        <div className="card">
          <h2>BASIC PLAN</h2>
          <p>
            Access to educational resources and tutorials. <br/>
            Basic market analysis and daily market updates.<br/>
            Competitive floating spreads.<br/>
            Limited number of trading signals..<br/>
            Standard customer support.
          </p>
        </div>

        <div className="card middle-card">
          <h3>ADVANCED PLAN</h3>
          <p>
            Advanced trading courses and expert insights.<br/>
            Premium market analysis<br/>
            High-quality trading signals.<br/>
            Access to proprietary trading tools and algorithms.<br/>
            24/7 dedicated customer support.<br/>
            One-on-one coaching with experienced traders.
          </p>
        </div>

        <div className="card">
          <h4>VIP PLAN</h4>
          <p>
            VIP market trading signals from top analysts.<br/>
            Priority access to cutting-edge trading tools.<br/>
            Premium customer support with dedicated account manager.<br/>
            Invitations to exclusive events and seminars.<br/>
            Regular performance reviews.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Plans;
