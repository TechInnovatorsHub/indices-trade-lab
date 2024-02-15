// eslint-disable-next-line no-unused-vars
import React from 'react';
import Companies from '../Companies/Companies';
import Withdrawals from "../Serivces/Serivces";
import Landingpage from './Landingpage';
import Works from '../works/works'

const Home = () => {
  return (
    <div>
      <Landingpage />
      <Companies />
      <Withdrawals />
      <Works/>
    </div>
  )
}

export default Home;