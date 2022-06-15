import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Book } from '../models/book';

const bookAxios = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getBooks = (params: any): Promise<AxiosResponse<Book[]>> => {
  return bookAxios.get('/books', { params });
};
