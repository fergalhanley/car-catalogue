import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const middleware = [
    thunk,
    routerMiddleware(browserHistory),
];

if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
}

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;