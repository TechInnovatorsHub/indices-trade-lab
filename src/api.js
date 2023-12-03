import axios from 'axios';

const API = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
});

// Retrieve the access token from local storage
const accessToken = JSON.parse(localStorage.getItem('authTokens')).access;

//  Set default headers for auth
API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

export default API;
