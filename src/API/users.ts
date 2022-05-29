import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { User, LoginUser } from '../store/models/user';
import axiosInstance from '../API';

export const getUser = (): Promise<AxiosResponse<User>> => {
  return axiosInstance.get('/user');
};

export const loginUser = (): Promise<AxiosRequestConfig<LoginUser>> => {
  return axios.post('auth/login');
};

export const registerUser = (): Promise<AxiosResponse<User>> => {
  return axios.post('auth/register');
};

export const updateUser = (): Promise<AxiosResponse<User>> => {
  return axios.put('https://jsonplaceholder.typicode.com/users/1');
};
