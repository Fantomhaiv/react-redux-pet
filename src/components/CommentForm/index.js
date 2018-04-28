import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const limits = {
  user: {
    min: 5,
    max: 15,
  },
  text: {
    min: 20,
    max: 50,
  },
};

export default class CommentForm extends Component {
  static propTypes = {

  };

  state = {
    user: '',
    text: '',
  }

  getClassName = type => (this.state[type].length && this.state[type].length < limits[type].min
    ? 'form-input__error' : '')

  handleSubmit = (event) => {
    event.preventDefault();

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
