import { CART_DATA } from '../constants';

const initialState = {
    cart_data: ""
};

const cartDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_DATA:
            return {
                ...state,
                cart_data: action.payload
            };
        default:
            return state;
    }
}
export default cartDataReducer;