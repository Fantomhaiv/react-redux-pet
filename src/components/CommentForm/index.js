import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../AC';
import './style.css';

const limits = {
  user: {
    min: 5,
    max: 15,
  },
  text: {
    min: 10,
    max: 500,
  },
};

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    addCommentConnect: PropTypes.func.isRequired,
  };

  state = {
    user: '',
    text: '',
  }

  getClassName = type => (this.state[type].length && this.state[type].length < limits[type].min
    ? 'form-input__error' : '')

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addCommentConnect(this.state, this.props.articleId);

    this.setState({
      user: '',
      text: '',
    });
  }

  handleChange = type => (event) => {
    const { value } = event.target;

    if (value.length > limits[type].max) return;

    this.setState({
      [type]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        user: <input
          value={this.state.user}
          onChange={this.handleChange('user')}
          className={this.getClassName('user')}
        />
        comment: <input
          value={this.state.text}
          onChange={this.handleChange('text')}
          className={this.getClassName('text')}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

const mapStateToProps = null;

// TODO коммент для напоминания что и так тоже можно диспатчить
/*const mapDispatchToState = (dispatch, ownProps) => ({
  addComment: comment => dispatch(addComment(comment, ownProps.articleId)),
});*/
const mapDispatchToState = {
  addCommentConnect: addComment,
};

export default connect(mapStateToProps, mapDispatchToState)(CommentForm);
