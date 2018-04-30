import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export default connect((state, ownProps) =>
  ({ comment: state.comments.find(comment => comment.id === ownProps.id) }))(Comment);
