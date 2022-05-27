import { combineReducers } from 'redux';
import userSlice from '../redusers/user';

const rootReducer = combineReducers({ userSlice });

export default rootReducer;
