import { USER_DATA } from '../constants';

const initialState = {
    user_data: ""
};

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                user_data: action.payload
            };
        default:
            return state;
    }
}
export default userDataReducer;