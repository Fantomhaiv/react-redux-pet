import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

function CommentList({ comments = [], isOpen, toggleOpen }) {
  const text = isOpen ? 'hide comments' : 'show comments';

  return (
    <div>
      <button onClick={toggleOpen}>{text}</button>
      {getBody({ comments, isOpen })}
    </div>
  );
}

function getBody({ comments, isOpen }) {
  if (!isOpen) return null;
  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <ul>
      {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

getBody.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default toggleOpen(CommentList);
