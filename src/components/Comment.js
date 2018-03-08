import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <div>
      <h3>{comment.user}</h3>
      <p>{comment.text}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    idd: PropTypes.number.isRequired,
  }).isRequired,
};
