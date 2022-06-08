import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Genre } from '../models/genre';

const bookAxios = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getGenres = (): Promise<AxiosResponse<Genre[]>> => {
  return bookAxios.get('/genres');
};
