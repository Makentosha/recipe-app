import React from 'react';
import styles from './Spinner.css';

const Spinner = () => (
  <div className={styles['test']}>
    <div className={styles['lds-ripple']}>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
