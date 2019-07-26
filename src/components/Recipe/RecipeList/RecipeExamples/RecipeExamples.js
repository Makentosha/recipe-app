import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const RecipeExamples = (props) => {
  const recipes = ['Soup', 'Pasta', 'Pizza ', 'Burger', 'Sushi ', 'Salad', 'Cake'];

  return (
    <React.Fragment>
      <h3 className={styles.heading}>Enter a recipe name</h3>
      <ul className={styles.recipes}>
        {
          recipes.map((recipeName, index) => {
            return (
              <li
                key={index}
                onClick={() => props.onRecipeSearch(recipeName)}>
                {recipeName}
              </li>
            );
          })
        }
      </ul>
    </React.Fragment>
  );
};

RecipeExamples.propTypes = {
  onRecipeSearch: PropTypes.func
};

export default RecipeExamples;
