import axios, { AxiosRequestHeaders } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    console.log(token);
    
    config.headers = {
      ...config.headers,
      authorization: `Berear ${token}`,
    };
  }
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  if (response.data.accessToken) {
    console.log(response);

    localStorage.setItem('token', response.data.accessToken);
  }
  return response;
});

export default axiosInstance;
