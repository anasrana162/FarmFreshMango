import { TOKEN } from '../constants';

export function userToken(token) {
    return {
        type: TOKEN,
        payload: token
    }
}