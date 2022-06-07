import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Book } from '../models/book';
import narnia from '../assets/narnia.png';
import psychlogy from '../assets/psychlogy.png';
import doriangray from '../assets/doriangray.png';
import subtleart from '../assets/subtleart.png';
import twotowers from '../assets/twotowers.png';

const bookAxios = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// const testArr: Book[] = [
//   { id: 1, photo: narnia, title: 'The Chronicles of Narnia', author: 'C. S. Lewis', rating: 5, price: '14.99', news: false, bestsaller: false, isFavorite: true, available: true },
//   { id: 2, photo: psychlogy, title: 'The Psychlogy of Money', author: 'Morgan Housel', rating: 4, price: '14.99', news: false, bestsaller: true, isFavorite: false, available: true },
//   { id: 3, photo: doriangray, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', rating: 0, price: '14.99', news: true, bestsaller: false, isFavorite: true, available: false },
//   { id: 4, photo: subtleart, title: 'The Subtle art of not giving a fuck', author: 'Mark Manson', rating: 5, price: '14.99', news: true, bestsaller: true, isFavorite: false, available: true },
//   { id: 5, photo: twotowers, title: 'The Two towers', author: 'J. R. R. Tolkien', rating: 5, price: '14.99', news: false, bestsaller: false, isFavorite: true, available: true },
// ];

// export const getBooks = async (): Promise<Book[]> => {
//   return testArr;
// };

export const getBooks = (): Promise<AxiosResponse<Book[]>> => {
  return bookAxios.get('/books');
};
