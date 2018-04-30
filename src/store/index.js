import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/index';
import logger from '../middlewares/logger';

// we can add more middlewares in arguments of applyMiddleware(logger, api, banana, ...etc)
const enhancer = applyMiddleware(logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;
