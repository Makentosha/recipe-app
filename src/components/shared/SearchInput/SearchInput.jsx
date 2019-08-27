import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchInput.css';

function SearchInput(props) {
  function handleInput(e) {
    props.onInput(e.target.value);
  }

  return (
    <input
      className={styles['search-bar']}
      placeholder="Search a recipe..."
      type="text"
      value={props.value || ''}
      onChange={handleInput}/>
  );
}

SearchInput.propTypes = {
  onInput: PropTypes.func,
  value: PropTypes.string
};

export default SearchInput;
