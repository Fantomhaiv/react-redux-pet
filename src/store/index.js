import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/index';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import logger from '../middlewares/logger';

const enhancer = applyMiddleware(thunk, randomId, api, logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;
