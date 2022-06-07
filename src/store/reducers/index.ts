import { combineReducers } from 'redux';
import userSlice from './user';
import bookSlice from './book';
import paginationSlice from './paginations';

const rootReducer = combineReducers({ userSlice, bookSlice, paginationSlice });

export default rootReducer;
