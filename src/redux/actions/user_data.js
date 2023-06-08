import { USER_DATA } from '../constants';

export function userData(userData) {
    return {
        type: USER_DATA,
        payload: userData
    }
}