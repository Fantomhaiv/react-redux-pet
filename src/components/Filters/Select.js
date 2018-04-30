import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import { changeSelection } from '../../AC';

class SelectFilter extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    changeSelectionConnect: PropTypes.func.isRequired,
  };

  handleChange = selected => this.props.changeSelectionConnect(selected);

  render() {
    const { articles, selected } = this.props;

    const options = articles.map(article => ({
      label: article.title,
      value: article.id,
    }));

    return (<Select
      options={options}
      value={selected}
      isMulti
      onChange={this.handleChange}
    />);
  }
}

const mapStateToProps = state => ({
  selected: state.filters.selected,
  articles: state.articles,
});

const mapDispatchToState = {
  changeSelectionConnect: changeSelection,
};

export default connect(mapStateToProps, mapDispatchToState)(SelectFilter);
