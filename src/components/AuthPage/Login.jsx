// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  // const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the login credentials are valid
    if (username === 'exampleUser' && password === 'examplePassword') {
      // Redirect to the dashboard or desired page
      // history.push('/dashboard');
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  const toggleBtn = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <button
          onClick={toggleBtn}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isSignup ? 'Signup' : 'Login'}
        </button>
        <button
          onClick={toggleBtn}
          className={`absolute top-0 left-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transform transition-transform ease-in-out duration-300 ${isSignup ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {isSignup ? 'Login' : 'Signup'}
        </button>
      </div>
      <div className="bg-white rounded shadow p-8">
        <form className="space-y-4" onSubmit={handleLogin}>
          {isSignup && (
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
          )}
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
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
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

export default Login;
