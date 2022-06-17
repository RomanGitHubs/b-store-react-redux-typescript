import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Book } from '../models/book';

type myResponse = {
  books: Book[],
  minPriceBook: number,
  maxPriceBook: number,
}

const bookAxios = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getBooks = (params: any): Promise<AxiosResponse<myResponse>> => {
  return bookAxios.get('/books', { params });
};
