import { combineReducers } from 'redux';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import measureReducer from './measureReducer';

const rootReducer = combineReducers({
  item: itemReducer,
  auth: authReducer,
  measure: measureReducer,
});

export default rootReducer;
