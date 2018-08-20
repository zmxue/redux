import reducers from './reduces';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

let store = createStore(reducers, {}, applyMiddleware(promise, thunk, logger));

export default store;