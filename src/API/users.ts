import axios, { AxiosResponse } from 'axios';
import { User } from '../store/models/user';

export const getUser = (): Promise<AxiosResponse<User>> => {
  return axios.get('https://jsonplaceholder.typicode.com/users/1');
};
