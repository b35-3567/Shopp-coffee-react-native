import { combineReducers } from 'redux';
import { SET_CART_DATA_LENGTH } from './actions';

const initialState = {
  cartDataLength: 0,
};

const userReducer = (state = initialState, action) => {
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

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers if needed
});

export default rootReducer;
