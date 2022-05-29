import axios, { AxiosRequestHeaders } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = {
      ...config.headers,
      authorization: `Berear ${token}`,
    };
  }
  return config;
});

export default axiosInstance;
