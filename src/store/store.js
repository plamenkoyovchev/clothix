import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { persistStore } from "redux-persist";

import rootReducer from './reducers/rootReducer';

const middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };   