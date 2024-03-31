import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    // Khai báo thêm các reducer khác nếu cần
});

export default rootReducer;
