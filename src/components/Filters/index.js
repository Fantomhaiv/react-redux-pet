import React, { Component } from 'react';
import DateRange from './DateRange';
import SelectFilter from './Select';

export default class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter />
        <DateRange />
      </div>
    );
  }
}
