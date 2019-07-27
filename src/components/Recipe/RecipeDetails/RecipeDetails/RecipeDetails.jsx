import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/index';

import styles from './style.css';

function RecipeDetails(props) {
  const {
    ingredients,
    title,
    publisher
  } = props;

  const ingredientsList = (
    <ul className={styles['ingredients-list']}>
      {
        ingredients.map((ingredient, index) => (
          <li key={index}>
            <FontAwesomeIcon className={styles.icon} icon={faCheckCircle}/>
            {ingredient}
          </li>
        ))
      }
    </ul>
  );

  return (
    <React.Fragment>
      <img
        className={styles.recipeImg}
        src={props.image_url}
        alt={title}/>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.author}>Author: {publisher}</h3>
      {ingredientsList}
    </React.Fragment>
  );
}

RecipeDetails.propTypes = {
  ingredients: PropTypes.array,
  image_url: PropTypes.string,
  title: PropTypes.string,
  publisher: PropTypes.string
};

export default RecipeDetails;
