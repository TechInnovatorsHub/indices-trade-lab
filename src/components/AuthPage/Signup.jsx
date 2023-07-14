// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Password validation
    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      setPasswordError('Password should contain at least one uppercase letter, one lowercase letter, and one digit.');
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    // Proceed with signup
    // Your signup logic goes here
    console.log('Signup successful!');
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white rounded shadow p-8">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSignup}>
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
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
          Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}

export default Signup;