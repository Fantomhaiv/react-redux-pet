import React from 'react';
import Article from './Article';

export default function ArticleList({ articles }) {
  const articleElements = articles.map(article => <li><Article key={article.id} article={article} /></li>);

  return (
    <ul>
      {articleElements}
    </ul>
  );
}
