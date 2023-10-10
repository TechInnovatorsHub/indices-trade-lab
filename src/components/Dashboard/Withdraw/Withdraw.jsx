/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import "./Withdraw.css";
import withdraw from '../../../assets/images/withdraw.png'

const Withdraw = () => {
  const [withdrawalMethod, setWithdrawalMethod] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  const handleWithdrawalSubmit = (event) => {
    event.preventDefault();

    // Submit the withdrawal request to the server
  };
  return (

    <div className="withdrawal-page">
    <h1>Withdraw Funds</h1>

    <form onSubmit={handleWithdrawalSubmit}>
    <img  className="withdrwal-icon" src={withdraw} />
      <select value={withdrawalMethod} onChange={(event) => setWithdrawalMethod(event.target.value)}>
        <option value="">Select a withdrawal method</option>
        <option value="bank_transfer">Bank transfer</option>
        <option value="paypal">PayPal</option>
        <option value="credit_card">Credit card</option>
        <option value="mpesa">Mpesa</option>
      </select>

      <input
        type="number"
        value={withdrawalAmount}
        onChange={(event) => setWithdrawalAmount(event.target.value)}
        placeholder="Enter the amount to withdraw"
      />
 <button type="submit">Withdraw</button>



    </form>

    <p className="withdrawal-info">
      Withdrawal fees may apply. Please see our <a href="/withdrawal-fees">withdrawal fees page</a> for more information.
    </p>

 
  </div>
  )
}
export default Withdraw;