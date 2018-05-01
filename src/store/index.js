import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/index';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import logger from '../middlewares/logger';

// we can add more middlewares in arguments of applyMiddleware(logger, api, banana, ...etc)
const enhancer = applyMiddleware(randomId, api, logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;
