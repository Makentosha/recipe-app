import React from 'react';
import styles from './SearchInput.css';

const SearchInput = (props) => {
  return (
    <input
      className={styles['search-bar']}
      placeholder="Search a recipe..."
      type="text"
      value={props.value}
      onChange={props.onInput}/>
  )
};

export default SearchInput;
