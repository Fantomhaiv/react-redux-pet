import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './Loader';
import Article from './Article';
import accordion from '../decorators/accordion';
import { filteredArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadAllArticlesConnect: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticlesConnect } = this.props;

    if (!loaded && !loading) loadAllArticlesConnect();
  }

  render() {
    const {
      articles, openItemId, toggleOpenItem, loading,
    } = this.props;

    if (loading) return <Loader />;

    const articleElements = articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openItemId}
          toggleOpen={toggleOpenItem(article.id)}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(accordion(ArticleList));
