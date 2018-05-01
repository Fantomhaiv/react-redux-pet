import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import CommentList from '../CommentList';
import { deleteArticle } from '../../AC';
import './style.css';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    // from connect
    deleteArticleConnect: PropTypes.func.isRequired,
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <section>
        <p>{article.text}</p>
        <CommentList article={article} />
      </section>
    );
  }

  handleDelete = () => {
    const { deleteArticleConnect, article } = this.props;
    deleteArticleConnect(article.id);

    console.log('---', 'deleting article');
  };

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDelete}>
          delete me
        </button>
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default connect(null, {
  deleteArticleConnect: deleteArticle,
})(Article);
