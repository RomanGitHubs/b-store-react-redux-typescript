import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Book } from '../models/book';
import narnia from '../assets/narnia.png';
import psychlogy from '../assets/psychlogy.png';
import doriangray from '../assets/doriangray.png';
import subtleart from '../assets/subtleart.png';
import twotowers from '../assets/twotowers.png';

// const bookAxios = axios.create({
//   baseURL: 'http://localhost:5000/api',
// });

const testArr: Array<Book> = [
  { id: 1, cover: narnia, title: 'The Chronicles of Narnia', author: 'C. S. Lewis', rating: 5, price: '14.99', new: false, bestsaller: false, isFavorite: true, available: true },
  { id: 2, cover: psychlogy, title: 'The Psychlogy of Money', author: 'Morgan Housel', rating: 4, price: '14.99', new: false, bestsaller: true, isFavorite: false, available: true },
  { id: 3, cover: doriangray, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', rating: 0, price: '14.99', new: true, bestsaller: false, isFavorite: true, available: false },
  { id: 4, cover: subtleart, title: 'The Subtle art of not giving a fuck', author: 'Mark Manson', rating: 5, price: '14.99', new: true, bestsaller: true, isFavorite: false, available: true },
  { id: 5, cover: twotowers, title: 'The Two towers', author: 'J. R. R. Tolkien', rating: 5, price: '14.99', new: false, bestsaller: false, isFavorite: true, available: true },
];

export const getBooks = async (): Promise<Array<Book>> => {
  return testArr;
};
