import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer'; // Import reducer của bạn
import cartReducer from './cartReducer'; // Import reducer của bạn
// Kết hợp tất cả các reducers của bạn
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// Tạo store từ rootReducer
const store = createStore(rootReducer);

export default store;
