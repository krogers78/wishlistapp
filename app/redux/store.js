import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers';


export default store = createStore(
    reducers,
    {},
    applyMiddleware(createLogger())
);