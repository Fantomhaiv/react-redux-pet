import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <UserForm />
        <Filters articles={[]} />
        <ArticleList />
      </div>
    );
  }
}

