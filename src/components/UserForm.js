import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserForm extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  handleUserChange = (event) => {
    if (event.target.value.length > 10) return;

    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        Name: <input type="text" value={this.props.value} onChange={this.handleUserChange} />
      </div>
    );
  }
}
