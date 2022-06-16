import { combineReducers } from 'redux';
import userSlice from './user';
import bookSlice from './book';
import filterSlice from './filters';

const rootReducer = combineReducers({
  userSlice, bookSlice, filterSlice,
});

export default rootReducer;
