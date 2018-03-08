import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

export default function ArticleList({ articles }) {
  const articleElements = articles.map(article =>
    <li><Article key={article.id} article={article} /></li>);

  return (
    <ul>
      {articleElements}
    </ul>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
