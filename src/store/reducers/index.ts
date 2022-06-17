import { combineReducers } from 'redux';
import userSlice from './user';
import bookSlice from './book';

const rootReducer = combineReducers({
  userSlice, bookSlice,
});

export default rootReducer;
