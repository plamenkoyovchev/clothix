import {
    combineReducers
} from 'redux';

import userReducer from './user';
import cartReducer from './cart';
import shopReducer from './shop';
import directoryReducer from './directory';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer
});

export default rootReducer;