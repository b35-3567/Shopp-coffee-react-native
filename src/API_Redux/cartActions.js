// actions/cartActions.js
import { UPDATE_QUANTITY } from './types';

export const updateQuantity = (itemId, quantity) => {
  return async (dispatch) => {
    try {
      // Gửi request API để cập nhật số lượng sản phẩm
      const response = await fetch(`http://192.168.1.20:3000/cart/update_item/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
      const updatedCartItem = await response.json();

      // Dispatch action để cập nhật Redux state
      dispatch({ type: UPDATE_QUANTITY, payload: updatedCartItem });
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };
};
