import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/index';

import styles from './style.css';

const RecipeDetails = (props) => {
  const ingredientsList = (
    <ul className={styles['ingredients-list']}>
      {
        props.recipeDetails.ingredients.map((ingredient, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon className={styles.icon} icon={faCheckCircle}/>
              {ingredient}
            </li>
          );
        })
      }
    </ul>
  );

  return (
    <React.Fragment>
      <img
        className={styles.recipeImg}
        src={props.recipeDetails.image_url}
        alt=""/>
      <h1 className={styles.title}>{props.recipeDetails.title}</h1>
      <h3 className={styles.author}>Author: {props.recipeDetails.publisher}</h3>
      {ingredientsList}
    </React.Fragment>
  );
};

RecipeDetails.propTypes = {
  recipeDetails: PropTypes.object
};

export default RecipeDetails;
