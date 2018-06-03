import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../ArticleList';
import Article from '../Article';

class Articles extends Component {
  static propTypes = {
  };

  getIndex = () => <h2>Please select article</h2>

  getArticle = ({ match }) => {
    const { id } = match.params;

    return <Article key={id} id={id} isOpen />;
  }

  render() {
    return (
      <div>
        <ArticleList />
        <Route exact path="/articles" render={this.getIndex} />
        <Route exact path="/articles/:id" render={this.getArticle} />
      </div>
    );
  }
}

export default Articles;
