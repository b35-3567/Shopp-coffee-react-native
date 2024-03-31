// userReducer.js
import { SAVE_USER_INFO } from './userActions';
const initialState = {
    userInfo: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state;
    }
   
};

export default userReducer;
