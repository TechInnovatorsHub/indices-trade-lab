// eslint-disable-next-line no-unused-vars
import React from 'react';
import Companies from '../Companies/Companies';
import Withdrawals from "../Serivces/Serivces";
import Landingpage from './Landingpage';

const Home = () => {
  return (
    <div>
      <Landingpage />
      <Companies />
      <Withdrawals />
    </div>
  )
}

export default Home;