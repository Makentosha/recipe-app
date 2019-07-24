import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchInput.css';

const SearchInput = (props) => {
  return (
    <input
      className={styles['search-bar']}
      placeholder="Search a recipe..."
      type="text"
      value={props.value}
      onChange={props.onInput}/>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func
};

export default SearchInput;
