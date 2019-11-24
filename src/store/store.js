import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { persistStore } from "redux-persist";

import rootReducer from './reducers/rootReducer';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };   