import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import CommentList from './CommentList';
import './article.css';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <section>
        <p>{article.text}</p>
        <CommentList comments={article.comments} />
      </section>
    );
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
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

export default Article;
