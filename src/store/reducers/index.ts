import { combineReducers } from 'redux';
import userSlice from './user';
import bookSlice from './book';
import paginationSlice from './paginations';
import genreSlice from './genre';
import sortSlice from './sort';
import priceSlice from './price';

const rootReducer = combineReducers({
  userSlice, bookSlice, paginationSlice, genreSlice, sortSlice, priceSlice,
});

export default rootReducer;
