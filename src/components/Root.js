import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import store from '../store';

function Root(props) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
}

Root.propTypes = {

};

export default Root;
