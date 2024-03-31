/*
//store.js
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";


export default configureStore ({
    reducer:{
        cart:CartReducer
    }
})
*/
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartReducer';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
