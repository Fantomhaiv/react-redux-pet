import React from 'react';

export default Component => class Accordion extends React.Component {
  state = {
    openItemId: null,
  };

  // Карирование [openItemId => event => {}]
  toggleOpenItem = openItemId => (event) => {
    this.setState({
      openItemId: openItemId === this.state.openItemId ? null : openItemId,
    });
  }

  render() {
    return (<Component
      {...this.props}
      toggleOpenItem={this.toggleOpenItem}
      openItemId={this.state.openItemId}
    />);
  }
};
