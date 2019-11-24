import {
    combineReducers
} from 'redux';

import userReducer from './user';
import cartReducer from './cart';
import shopReducer from './shop';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
});

export default rootReducer;