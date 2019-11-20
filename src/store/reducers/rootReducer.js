import {
    combineReducers
} from 'redux';

import userReducer from './user';
import cartReducer from './cart';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default rootReducer;