import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pagination } from '../../models/pagination';

type InitialState = {
  pagination: Pagination | null;
}

const initialState: InitialState = {
  pagination: null,
};

const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    putPagination(state, action: PayloadAction<Pagination>) {
      state.pagination = action.payload;
    },
  },

});

export const { putPagination } = pagination.actions;
export default pagination.reducer;
