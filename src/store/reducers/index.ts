import { combineReducers } from 'redux';
import userSlice from './user';
import bookSlice from './book';
import paginationSlice from './paginations';
import genreSlice from './genre';

const rootReducer = combineReducers({ userSlice, bookSlice, paginationSlice, genreSlice });

export default rootReducer;
