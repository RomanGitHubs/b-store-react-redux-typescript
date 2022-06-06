import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../models/book';

type Books = {
  books: Book[] | null;
};

const initialState: Books = {
  books: [],
};

const book = createSlice({
  name: 'book',
  initialState,
  reducers: {
    putBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
  },

});

export const { putBooks } = book.actions;
export default book.reducer;
