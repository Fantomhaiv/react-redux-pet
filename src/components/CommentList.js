import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './Loader';
import Comment from './Comment';
import CommentForm from './CommentForm';
import toggleOpen from '../decorators/toggleOpen';
import { loadArticleComments } from '../AC';

function getBody({ article: { comments = [], id, commentsLoaded, commentsLoading }, isOpen }) {
  if (!isOpen) return null;
  if (commentsLoading) return <Loader />;
  if (!commentsLoaded) return null;

  if (!comments.length) {
    return (
      <div>
        <p>No comments yet</p>
        <CommentForm articleId={id} />
      </div>
    );
  }

  return (
    <div>
      <ul>
        {comments.map(id => <li key={id}><Comment id={id} /></li>)}
      </ul>
      <CommentForm articleId={id} />
    </div>
  );
}

class CommentList extends Component {
  componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
    if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadArticleComments(article.id);
    }
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    const text = isOpen ? 'hide comments' : 'show comments';
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {getBody({ article, isOpen })}
      </div>
    );
  }
}


CommentList.propTypes = {
  article: PropTypes.object,
  comments: PropTypes.array,
  // from toggleOpen decorator
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

export default connect(null, { loadArticleComments })(toggleOpen(CommentList));
