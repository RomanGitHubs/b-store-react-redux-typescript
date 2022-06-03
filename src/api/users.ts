import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { User } from '../store/models/user';
import axios from '../api';

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

type photoData = {
  file?: string;
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

export const photoUser = (data: photoData): Promise<AxiosResponse<UserResponse>> => {
  return axios.put('user/uploadphoto', data);
};

export const updateUser = (data: EditData): Promise<AxiosResponse<UserResponse>> => {
  return axios.put('user/edit', data);
};
