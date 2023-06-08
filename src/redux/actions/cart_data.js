import { CART_DATA } from '../constants';

export function cartData(cartData) {
    return {
        type: CART_DATA,
        payload: cartData
    }
}