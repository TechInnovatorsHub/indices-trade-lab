/* eslint-disable no-unused-vars */
import React from 'react';
import "./YourDeposits.css";
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const YourDeposits = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  const redirect = query.get('redirect_status')

  if (redirect === 'succeeded') {
    toast.success('Deposit was successful')
  }

  return (
    <div>YourDeposits</div>
  )
}

export default YourDeposits;
