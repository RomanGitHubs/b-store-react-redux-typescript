import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/user';

type InitialState = {
  error?: string;
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    putUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logoutUser(state, action) {
      state.user = null;
    },
  },

});

export const { putUser, logoutUser } = user.actions;
export default user.reducer;
