// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./plans.css";

const Plans = () => {
  return (
    <section className='planspage'>
    <div>
      <section className='plans'> 
        <h1>OUR PLANS</h1>
      </section>

      <div className="cards-container">
        <div className="card">
          <h2><b><i>BASIC PLAN</i><br/>$ 10/month</b></h2>
          <hr/>
          <p>
            <ol>
            <li>-Access to educational resources and tutorials.</li> 
          <li>  -Basic market analysis and daily market updates.</li>
           <li> -Competitive floating spreads.</li>
           <li> - Limited number of trading signals.</li>
           <li> -Standard customer support.</li>
            </ol>
            </p>
            <button class="button" ><b>choose plan</b></button>
          
        </div>

        <div className="card middle-card">
          <h3><b><i>ADVANCED PLAN</i><br/>$ 30/month</b></h3>
          <hr/>
          <p>
            -Advanced trading courses and expert insights.<br/>
            -Premium market analysis<br/>
            -High-quality trading signals.<br/>
           -Access to proprietary trading tools and algorithms.<br/>
           -24/7 dedicated customer support.<br/>
            One-on-one coaching with experienced traders.
          </p>
          <button class="button" ><b>choose plan</b></button>
        </div>

        <div className="card">
          <h4><b><i>VIP PLAN</i><br/>$ 50/month</b></h4>
          <hr/>
          <p>
            -VIP market trading signals from top analysts.<br/>
            -Priority access to cutting-edge trading tools.<br/>
           -Premium customer support with dedicated account manager.<br/>
            -Invitations to exclusive events and seminars.<br/>
            -Regular performance reviews.
          </p>
          <button class="button" ><b>choose plan</b></button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Plans;
