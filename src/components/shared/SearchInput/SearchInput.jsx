import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

import styles from './SearchInput.css';

function SearchInput(props) {
  function handleInput(e) {
    const routeObject = { pathname: props.location.pathname };
    const inputValue = e.target.value;

    if (inputValue) {
      routeObject.search = queryString.stringify({query: inputValue});
    }

    props.history.push(routeObject);
    props.onInput(e.target.value);

    console.log(props);
  }

  return (
    <input
      className={styles['search-bar']}
      placeholder="Search a recipe..."
      type="text"
      value={queryString.parse(props.location.search).query || ''}
      onChange={handleInput}/>
  );
}

SearchInput.propTypes = {
  onInput: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(SearchInput);
