import React from 'react';
import styles from './Genetics.css';


export const Regions = React.createClass({
  propTypes: {
    regions: React.PropTypes.array.required,
    showRegion: React.PropTypes.array.required,
    clickHandler: React.PropTypes.func.required,
  },

  rowClicked(e, index, row) { // eslint-disable-line no-unused-vars
    e.stopPropagation();
    this.props.clickHandler(index);
  },

  render() {
    return <div />;
  },
});
