// eslint-disable-next-line no-unused-vars
import React from 'react';
import Landingpage from './Landingpage';
import Works from '../Works/Works';
import Withdrawals from "../Withdrawals/Withdrawal";

const Home = () => {
  return (
    <div>
        <Landingpage />
        <Works />
        <Withdrawals />
    </div>
  )
}

export default Home;