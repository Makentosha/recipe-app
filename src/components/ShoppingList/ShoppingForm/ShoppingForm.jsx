import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import styles from './ShoppingForm.css';


const ShoppingForm = () => {
  return (
    <form action="">
      <input type="text"/>
      <FontAwesomeIcon className={styles.icon} icon={faPlus}/>
    </form>
  );
};

export default ShoppingForm;
