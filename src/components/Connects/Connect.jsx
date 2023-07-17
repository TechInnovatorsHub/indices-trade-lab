// eslint-disable-next-line no-unused-vars
import React from 'react';
// import "./Connect.css";
import certificate from "../../assets/certificate.jpeg";
import cto from "../../assets/cto.jpeg";
import ceo from "../../assets/ceo.jpeg";

const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
    <div className="flex items-center justify-between w-full  mt-4">
      <button className="ml-2">Register</button>
      <h1 className="text-2xl font-bold">Forex</h1>
      <button className="mr-2">Login</button>
    </div>

    <div className="flex items-center justify-center mt-8">
      <div className="w-1/2">
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center mb-4">
            <img
              className="w-24 h-24 rounded-full"
              src={cto}
              alt="Person 1"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Person 1</h2>
              <p className="text-sm">Brief description about Person 1</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="w-24 h-24 rounded-full"
              src={ceo}
              alt="Person 2"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Person 2</h2>
              <p className="text-sm">Brief description about Person 2</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg mb-4">Explore markets, trade with confidence.</p>
          <h2 className="text-xl font-bold">Markets We Operate In</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Stocks</li>
            <li>Cryptocurrency</li>
            <li>Forex</li>
          </ul>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Certificate</h2>
          <img className="w-full h-auto" src={certificate} alt="Certificate" />
        </div>
      </div>
    </div>
  </div>
  );
}


export default Connect;