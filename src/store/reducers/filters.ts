import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from '../../models/genre';
import { PriceSlider } from '../../models/priceSlider';
import { Sort } from '../../models/sort';

type InitialState = {
  genre: string[] | null;
  price: string | null;
  sort: string | null;
};

const initialState: InitialState = {
  genre: null,
  price: '0, 10000',
  sort: 'rating',
};

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    putGenr(state, action: PayloadAction<string[]>) {
      state.genre = action.payload;
    },
    putPrice(state, action: PayloadAction<string>) {
      state.price = action.payload;
    },
    putSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },

});

export const { putGenr, putPrice, putSort } = filter.actions;
export default filter.reducer;
