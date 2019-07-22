import React from 'react';
import styles from "./ShoppingForm.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


const ShoppingForm = (props) => {
  return (
    <form action="">
      <input type="text"/>
      <FontAwesomeIcon className={styles.icon} icon={faPlus}/>
    </form>
  )
};

export default ShoppingForm;
