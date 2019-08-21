import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.css';

function Input(props) {
  function handleInput(e) {
    props.onInput(e.target.value);
  }

  return (
    <div className={styles['input-container']}>
      {
        props.title && <label className={styles.label}>{props.title}</label>
      }
      <input
        className={styles.input}
        onChange={handleInput}
        {...props}/>
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onInput: PropTypes.func
};

export default Input;
