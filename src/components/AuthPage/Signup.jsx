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
    <div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<input type="text" placeholder="User name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
  )
}

export default Signup;