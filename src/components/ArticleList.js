import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
import { filteredArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadAllArticlesConnect: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticlesConnect } = this.props;

    if (!loaded && !loading) loadAllArticlesConnect();
  }

  render() {
    const {
      articles, loading,
    } = this.props;

    if (loading) return <Loader />;

    const articleElements = articles.map(article => (
      <li key={article.id}>
        <NavLink to={`/articles/${article.id}`} activeStyle={{ color: 'red' }} >{article.title}</NavLink>
      </li>));

    return (
      <ul>
        {articleElements}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: filteredArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded,
  };
}

const mapDispatchToProps = {
  loadAllArticlesConnect: loadAllArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
