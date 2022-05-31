import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { User } from '../store/models/user';
import axios from '../API';

type UserResponse = {
  accessToken?: string;
  user: User;
}

type Data = {
  email: string;
  password: string;
}

type EditData = {
  email?: string;
  password?: string;
  name?: string;
  newPassword?: string;
  photo?: string;
}

export const getUser = (): Promise<AxiosResponse<User>> => {
  return axios.get('/user');
};

export const registerUser = (data: Data): Promise<AxiosResponse<UserResponse>> => {
  return axios.post('auth/register', data);
};

export const loginUser = (data: Data): Promise<AxiosResponse<UserResponse>> => {
  return axios.post('auth/login', data);
};

// export const registerUser = (data: string) => {
//   return axios.request({ method: 'post', baseURL: 'http://localhost:5000/api', url: 'auth/register', data });
// };

export const updateUser = (data: EditData): Promise<AxiosResponse<UserResponse>> => {
  return axios.put('user/edit', data);
};
