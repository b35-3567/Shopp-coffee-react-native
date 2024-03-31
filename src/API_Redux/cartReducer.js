// cartReducer.js
import { SET_CART_DATA_LENGTH } from './actions';

const initialState = {
  cartDataLength: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_DATA_LENGTH:
      return {
        ...state,
        cartDataLength: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
