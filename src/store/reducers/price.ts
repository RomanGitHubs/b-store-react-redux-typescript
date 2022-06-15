import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PriceSlider } from '../../models/priceSlider';

type InitialState = {
  price: string | null;
}

const initialState: InitialState = {
  price: null,
};

const price = createSlice({
  name: 'price',
  initialState,
  reducers: {
    putPrice(state, action: PayloadAction<string>) {
      state.price = action.payload;
    },
  },

});

export const { putPrice } = price.actions;
export default price.reducer;
