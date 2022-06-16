import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../models/book';
import { Pagination } from '../../models/pagination';

type InitialState = {
  books: Book[] | null;
  pagination: Pagination | null;
}

const initialState: InitialState = {
  books: null,
  pagination: null,
};

const book = createSlice({
  name: 'book',
  initialState,
  reducers: {
    putBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    putPagination(state, action: PayloadAction<Pagination>) {
      state.pagination = action.payload;
    },
  },

});

export const { putBooks, putPagination } = book.actions;
export default book.reducer;
