import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './InputGroup.css';
import PropTypes from 'prop-types';

function InputGroup(props) {
  function handleInput(e) {
    props.onInput(e.target.value);
  }

  return (
    <div className={styles['input-group']}>
      <input
        type="text"
        value={props.value}
        onChange={handleInput}/>
      <button
        disabled={props.value.length <= props.minLength - 1}
        onClick={props.onIngredientAdd}>
        <FontAwesomeIcon icon={props.icon}/>
      </button>
    </div>
  );
}

InputGroup.propTypes = {
  value: PropTypes.string,
  minLength: PropTypes.number,
  icon: PropTypes.object,
  onInput: PropTypes.func,
  onIngredientAdd: PropTypes.func
};

export default InputGroup;
