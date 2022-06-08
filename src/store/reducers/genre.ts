import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from '../../models/genre';

type Genres = {
  genre: Genre[] | null;
};

const initialState: Genres = {
  genre: null,
};

const genre = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    putGenres(state, action: PayloadAction<Genre[]>) {
      state.genre = action.payload;
    },
  },

});

export const { putGenres } = genre.actions;
export default genre.reducer;
