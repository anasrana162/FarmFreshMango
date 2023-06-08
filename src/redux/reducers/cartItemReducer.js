import {CARTITEM_DATA } from '../constants';

const initialState = {
    cartItem_data: ""
};

const cartItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_DATA:
            return {
                ...state,
                cartItem_data: action.payload
            };
        default:
            return state;
    }
}
export default cartItemReducer;