/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
      ? jwtDecode(localStorage.getItem('authTokens'))
      : null
  );
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    try {

      const response = await fetch('http://127.0.0.1:8000/api/log_in/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();

      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem('authTokens', JSON.stringify(data));
        localStorage.setItem('user', JSON.stringify(jwtDecode(data.access)));

        toast(
          'Login successful! Redirecting to dashboard', {
          type: 'success'
        })
        await new Promise(resolve => setTimeout(resolve, 2000))

        navigate('/dashboard');
      } else {
        toast(
          'something went wrong!', {
          type: 'error'
        })
        localStorage.setItem('')
      }
    }
    catch (error) {
      toast(`Login failed. Please try again later!`, {
        type: 'error',
      });
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/sign_up/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });
      if (response.status === 201) {

        toast(
          'Registration successful! Please login to continue.', {
          type: 'success'
        }
        )

        navigate('/login');
      } else {
        toast(
          'something went wrong!', {
          type: 'error'
        })
      }
    } catch (error) {
      console.error('Registration error:', error)
      toast(
        'Registration failed. Please try again later!', {
        type: 'error'
      })
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    toast(null);
    localStorage.removeItem('authTokens');
    navigate('/', { replace: true });
    toast('Logout was successfull', {
      type: 'success'
    })
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
