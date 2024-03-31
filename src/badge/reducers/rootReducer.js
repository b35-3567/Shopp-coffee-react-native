// file reducers/rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // các reducer khác nếu có
});

export default rootReducer;
