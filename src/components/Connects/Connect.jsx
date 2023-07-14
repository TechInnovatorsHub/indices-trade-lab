// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Connect.css";
import certificate from "../../assets/certificate.jpeg";
import cto from "../../assets/cto.jpeg";
import ceo from "../../assets/ceo.jpeg";

const Connect = () => {
  return (
    <div className="container">
      <header>
        <nav className="header-nav">
          <a href="/login">Login</a>
        </nav>
        <button className="cta-button">Trade Now</button>
      </header>

      <main>
        <section className="hero-section">
          <h1>Welcome to MarketsHub</h1>
          <p>Explore markets, trade with confidence.</p>
        </section>

        <section className="markets-section">
          <h2>Markets We Operate In</h2>
          <ul>
            <li>Stocks</li>
            <li>Cryptocurrency</li>
            <li>Forex</li>
          </ul>
        </section>

        <section className="certificate-section">
          <div className="certificate-info">
            <h3>Certificate Sample</h3>
            <img src={certificate} alt="Certificate Sample" />
          </div>
        </section>

        <section className="owners-section">
          <div className="owner-profile">
            <img src={ceo} alt="Owner 1" />
            <h4>John Doe</h4>
            <p>Co-founder & CEO</p>
          </div>
          <div className="owner-profile">
            <img src={cto} alt="Owner 2" />
            <h4>Jane Smith</h4>
            <p>Co-founder & CTO</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 MarketsHub. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default Connect;