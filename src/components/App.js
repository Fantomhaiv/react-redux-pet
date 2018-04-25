import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import ArticleList from './ArticleList';
import UserForm from './UserForm';

/* const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]; */

export default class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    selection: null,
  };

  changeSelection = selection => this.setState({ selection });

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id,
    }));

    return (
      <div>
        <UserForm />
        <Select
          options={options}
          value={this.state.selection}
          onChange={this.changeSelection}
        />
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}
