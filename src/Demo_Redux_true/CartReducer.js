/*
//CartReducer.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
        removeFromCart : (state,action) => {
            const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeFromCart;
        },
        incrementQuantity : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            itemInCart.quantity++;
        },
        decrementQuantity : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if(itemInCart.quantity == 1){
                const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeFromCart;
            }else{
                itemInCart.quantity--;
            }

        }
    }
});


export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;
 */

 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { UPDATE_CART_LENGTH } from './CartActionTypes';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartLength: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCartIndex = state.cart.findIndex((item) => item._id === action.payload._id);
      if (itemInCartIndex !== -1) {
        state.cart[itemInCartIndex].quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter((item) => item._id !== action.payload._id);
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCartIndex = state.cart.findIndex((item) => item._id === action.payload._id);
      state.cart[itemInCartIndex].quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCartIndex = state.cart.findIndex((item) => item._id === action.payload._id);
      if (state.cart[itemInCartIndex].quantity === 1) {
        const removeFromCart = state.cart.filter((item) => item._id !== action.payload._id);
        state.cart = removeFromCart;
      } else {
        state.cart[itemInCartIndex].quantity--;
      }
    },
    
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
// Riêng reducer cartReducer
export const cartReducer = (state = cartSlice.initialState, action) => {
  switch (action.type) {
    case UPDATE_CART_LENGTH:
      return {
        ...state,
        cartLength: action.payload,
      };
    default:
      return state;
  }
};
export default cartSlice.reducer;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 

