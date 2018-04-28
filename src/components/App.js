import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';

export default class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { articles } = this.props;

    return (
      <div>
        <Counter />
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} defaultOpenId={articles[0].id} />
        <ArticlesChart articles={articles} />
      </div>
    );
  }
}

