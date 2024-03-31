// CartActions.js
import { UPDATE_CART_LENGTH } from './CartActionTypes';

export const updateCartLength = (length) => ({
  type: UPDATE_CART_LENGTH,
  payload: length,
});
