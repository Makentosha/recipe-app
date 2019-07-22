import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/index';

import recipeDetails from './RecipeDetails.css';

const RecipeDetails = (props) => {
  const ingredientsList = (
    <ul className={recipeDetails['ingredients-list']}>
      {
        props.recipeDetails.ingredients.map((ingredient, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon className={recipeDetails.icon} icon={faCheckCircle}/>
              {ingredient}
            </li>
          )
        })
      }
    </ul>
  );

  return (
    <React.Fragment>
      <img
        className={recipeDetails.recipeImg}
        src={props.recipeDetails.image_url}
        alt=""/>
      <h1 className={recipeDetails.title}>{props.recipeDetails.title}</h1>
      <h3 className={recipeDetails.author}>Author: {props.recipeDetails.publisher}</h3>
      {ingredientsList}
    </React.Fragment>
  );
};

export default RecipeDetails;
