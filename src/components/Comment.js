import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelectorFactory } from '../selectors';

function Comment({ comment }) {
  return (
    <div>
      <h3>{comment.user}</h3>
      <p>{comment.text}</p>
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  // from connect
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();

  return (state, ownProps) => ({ comment: commentSelector(state, ownProps) })
};
// TODO lesson 5 time 01:13:00
export default connect(mapStateToProps)(Comment);
