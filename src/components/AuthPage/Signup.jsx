// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from 'react';
import "./Authpage.css";
// import { useHistory } from 'react-router-dom';

const Signup = () => {
  // const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isSignup, setIsSignup] = useState(true);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      setPasswordError('Password should contain at least one uppercase letter, one lowercase letter, and one digit.');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    // Signup logic goes here
    // console.log('Signup successful!');
  };

  const handleLogin = () => {
    // Redirect to login page
    // history.push('./login');
  };

  const toggleBtn = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" >
      <div className="relative">
        <button
          onClick={toggleBtn}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isSignup ? 'Signup' : 'Login'}
        </button>
        <button
          onClick={handleLogin}
          className={`absolute top-0 left-0 bg-blue-500 hover:bg-blue-600 text-gray-950 font-bold py-2 px-4 rounded transform transition-transform ease-in-out duration-300 ${isSignup ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {isSignup ? 'Login' : 'Signup'}
        </button>
      </div>
      <div className="bg-purple-500 rounded shadow p-8">
        <form className="space-y-4 text-gray-950 font-bold" onSubmit={handleSignup}>
          <div>
            <label htmlFor="username" className="block mb-1">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border border-gray-300 text-gray-950 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email"  className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
