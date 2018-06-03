import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/index';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import logger from '../middlewares/logger';
import history from '../history';

const enhancer = applyMiddleware(thunk, routerMiddleware(history), randomId, api/*, logger*/);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;
