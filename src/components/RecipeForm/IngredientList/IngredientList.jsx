import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './IngredientList.css';

function IngredientList(props) {
  const handleRemove = (index) => {
    return () => {
      return props.onRemove(index);
    };
  };

  const itemsList = props.values.map((value, index) => {
    return (
      <li key={index}
          className={styles['shopping-list-item']}>
        {value}
        <FontAwesomeIcon
          className={styles.icon}
          icon={faPen}/>
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.danger}`}
          icon={faTimes}
          onClick={handleRemove(index)}/>
      </li>);
  });

  return (
    <React.Fragment>
      <h3 className={styles.title}>
        {itemsList.length
          ? props.title
          : 'Add Some Ingredients'}
      </h3>
      <ul className={styles['shopping-list']}>
        {itemsList}
      </ul>
    </React.Fragment>
  );
}

IngredientList.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  values: PropTypes.array,
  id: PropTypes.string,
  onRemove: PropTypes.func
};

export default IngredientList;
