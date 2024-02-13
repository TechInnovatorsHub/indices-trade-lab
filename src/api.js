import axios from 'axios';
import { useEffect } from 'react';

const API = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
});

  // Retrieve the access token from local storage
  if (localStorage.getItem('authTokens')) {
    const accessToken = JSON.parse(localStorage.getItem('authTokens')).access;
      
    //  Set default headers for auth
    API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

export default API;
