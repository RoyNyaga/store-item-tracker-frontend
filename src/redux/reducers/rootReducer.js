import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import measureReducer from './measureReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['item', 'auth', 'measure'],
};

const rootReducer = combineReducers({
  item: itemReducer,
  auth: authReducer,
  measure: measureReducer,
});

export default persistReducer(persistConfig, rootReducer);
