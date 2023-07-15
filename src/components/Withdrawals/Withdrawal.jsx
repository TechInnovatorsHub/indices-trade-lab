// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Withdrawal.css";

const Withdrawal = () => {
  return (

    <div className='with'>
    <div className='header'><h1>Deposits & Withdrawals</h1>
    </div>
      
      
      <div>
        <p className='payment'>
          Choose  between multiple payment systems to Withdraw and deposit your funds quickly and securely.
        </p>
        <p className='deposit'>
        Minimum deposit- $10. Learn more</p>
      </div>
      <div className='images'>
        <img  src='./src/assets/images/visa.png'></img>
        <img  src='./src/assets/images/paypal.jpeg'></img>
        <img  src='./src/assets/images/mpesa.jpeg'></img>
      </div>
    </div>
    
  )
}

export default Withdrawal;