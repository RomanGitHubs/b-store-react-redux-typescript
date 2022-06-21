import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type } from 'os';
import { Book } from '../../models/book';
import { Pagination } from '../../models/pagination';

type InitialState = {
  books: Book[] | null;
  pagination: Pagination | null;
  minPrice: number;
  maxPrice: number;
  selectedGenres: number[];
  selectedMinPrice: number;
  selectedMaxPrice: number;
  selectedSort: string;
  selectedOrder: string;
}

const initialState: InitialState = {
  books: null,
  pagination: null,
  minPrice: 0,
  maxPrice: 100000,
  selectedGenres: [],
  selectedMinPrice: 0,
  selectedMaxPrice: 100000,
  selectedSort: 'rating',
  selectedOrder: 'DESC',
};

type Books = {
  books: Book[],
  minPriceBook: number,
  maxPriceBook: number,
}

type Price = {
  min: number,
  max: number,
}

const book = createSlice({
  name: 'book',
  initialState,
  reducers: {
    putBooks(state, action: PayloadAction<Books>) {
      state.books = action.payload.books;
      state.minPrice = action.payload.minPriceBook * 100;
      state.maxPrice = action.payload.maxPriceBook * 100;
    },
    putPagination(state, action: PayloadAction<Pagination>) {
      state.pagination = action.payload;
    },
    putGenr(state, action: PayloadAction<number[]>) {
      state.selectedGenres = action.payload;
    },
    putPrice(state, action: PayloadAction<Price>) {
      state.selectedMinPrice = action.payload.min;
      state.selectedMaxPrice = action.payload.max;
    },
    putSort(state, action: PayloadAction<string>) {
      state.selectedSort = action.payload;
    },
    putOrder(state, action: PayloadAction<string>) {
      state.selectedOrder = action.payload;
    },
  },

});

export const { putBooks, putPagination, putGenr, putPrice, putSort, putOrder } = book.actions;
export default book.reducer;
