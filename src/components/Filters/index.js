import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateRange from './DateRange';
import SelectFilter from './Select';

export default class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array,
  };

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    );
  }
}
