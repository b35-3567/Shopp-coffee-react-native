import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './Reducer';

// khởi tạo rootReducer, kết hợp tất cả các reducer
const rootReducer = combineReducers({
    counter: counterReducer,
});

// khởi tạo store, quản lý state
const store = configureStore({
    reducer: rootReducer,
});

export default store;

