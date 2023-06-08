
import { createStore } from 'redux'

import { combineReducers } from 'redux'
// {-------Reducers-------}
import userReducer from '../reducers/userReducer';
import userDataReducer from '../reducers/userDataReducer';
import cartDataReducer from '../reducers/cartDataReducer';
import cartItemReducer from '../reducers/cartItemReducer';


const rootReducer = combineReducers(
    {

        token: userReducer,
        user_data: userDataReducer,
        cart_data: cartDataReducer,

    }
);

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;