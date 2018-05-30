import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../AC';

class Counter extends Component {
  static propTypes = {
    // from connect
    counter: PropTypes.number.isRequired,
    incrementConnect: PropTypes.func.isRequired,
  };

  handleIncrement = () => {
    const { incrementConnect } = this.props;
    incrementConnect();
  };

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleIncrement}>Increment me</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.count,
  };
}

const mapDispatchToState = { incrementConnect: increment };

export default connect(mapStateToProps, mapDispatchToState)(Counter);
