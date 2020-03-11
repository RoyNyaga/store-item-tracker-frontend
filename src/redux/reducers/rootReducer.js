import authReducer from './authReducer'
import itemReducer from './itemReducer'
import measureReducer from './measureReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  item: itemReducer,
  auth: authReducer,
  measure: measureReducer
})

export default rootReducer
