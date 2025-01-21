import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VITE_BACKEND_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance;