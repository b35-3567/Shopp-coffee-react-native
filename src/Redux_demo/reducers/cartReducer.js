const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Xử lý thêm sản phẩm vào giỏ hàng
    case 'REMOVE_FROM_CART':
      // Xử lý xóa sản phẩm khỏi giỏ hàng
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };
    default:
      return state;
  }
};
