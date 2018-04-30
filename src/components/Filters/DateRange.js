import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { connect } from 'react-redux';
import { changeDateRange } from '../../AC';

class DateRange extends Component {
  static propTypes = {
    // from connect
    range: PropTypes.object.isRequired,
    changeDateRangeConnect: PropTypes.func.isRequired,
  }

  handleDayClick = (day) => {
    const { changeDateRangeConnect, range } = this.props;
    changeDateRangeConnect(DateUtils.addDayToRange(day, range));
  }

  render() {
    const { from, to } = this.props.range;
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  range: state.filters.dateRange,
});

const mapDispatchToState = {
  changeDateRangeConnect: changeDateRange,
};

export default connect(mapStateToProps, mapDispatchToState)(DateRange);
