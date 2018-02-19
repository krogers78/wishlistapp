import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import wishlists from './reducers/wishlistreducer';


export default store = createStore(
    combineReducers({
        wishlists
    }),
    {},
    applyMiddleware(createLogger())
);