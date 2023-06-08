import { CARTITEM_DATA } from '../constants';

export function cartItemData(cartItemData) {
    return {
        type: CARTITEM_DATA,
        payload: cartItemData
    }
}