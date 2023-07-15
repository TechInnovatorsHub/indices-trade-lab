// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./About.css";

const About = () => {
  return (
    <>
    <div className="about-us">
      <h1> About us</h1>
      <img src='./src/assets/images/us about.png'></img>
    </div>
    <div className="about-container">
    
    <p className="welcome-message">
     Welcome to our Forex Trade Sacco! We are dedicated to providing a secure platform for individuals to engage in forex trading.
    <br/>
    
    Our user-friendly interface ensures seamless navigation and our team of experts is always available to assist you.
    <br/>
    Join us today and start your journey towards financial success.
    </p>
    <div>
      <div>
       <p className="risk-message">
     Trading and investing involves significant level of risk and is not suitable and/or appropriate for all clients.
     Please  make sure you carefully consider your investment objectives, level of experience and   risk appetite
     <br/>
     before buying or selling. Buying or selling entails financial risks and could result in a partial or  complete
     loss of your funds, therefore, you should not invest funds you cannot  afford to lose.
     <br/>
    You should be aware  of and fully understand all the risks associated  with trading  and investing,and seek advice 
    from an independent financial advice. If you have any  doubts , you are granted limited non-excutive  rights to use 
    the ip contained in this site  for personsl, non-commercial, non-transferable use only in relation to the services offered on the site.
    <br/>
       </p> 
      </div>
      
    </div>
    </div>
    <div className='footer'>
    <div className='icons'>
      <a href=''><img src='./src/assets/images/twiter.png'></img></a>
      <a href=''><img src='./src/assets/images/ig.png'></img></a>
      <a href=''><img src='./src/assets/images/fb.png'></img></a>
    </div>
       <p>
        2023 FOREX TRADE SACCO ALL RIGHTS RESERVED
       </p>
       </div>
</>

  )
}

export default About;