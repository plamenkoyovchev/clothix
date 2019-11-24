import {
    combineReducers
} from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user';
import cartReducer from './cart';
import shopReducer from './shop';
import directoryReducer from './directory';

const reduxPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer
});

export default persistReducer(reduxPersistConfig, rootReducer);