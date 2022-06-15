import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sort } from '../../models/sort';

type InitialState = {
  sort: Sort | null;
}

const initialState: InitialState = {
  sort: null,
};

const sort = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    putSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },

});

export const { putSort } = sort.actions;
export default sort.reducer;
