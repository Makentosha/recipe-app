import React from 'react';
import Recipe from './Recipe/Recipe';

import RecipeExamples from './RecipeExamples/RecipeExamples';
import Spinner from '../../../SharedComponents/Spinner/Spinner';

const RecipeList = (props) => {
  let recipes;

  if (props.isLoading) {
    recipes = <Spinner />
  } else if (!props.recipes) {
    recipes = <RecipeExamples onRecipeSearch={props.onRecipeSearch} />
  } else if (!props.recipes.length) {
    recipes = <h2>No recipe found</h2>
  } else {
    recipes = props.recipes.map((recipe, index) => {
      return (
        <Recipe
          key={index}
          text={recipe.title}
          publisher={recipe.publisher}
          imgUrl={recipe.image_url}
          clicked={e => props.recipeSelect(recipe)}/>
      );
    });
  }

  return (
    <React.Fragment>
      {recipes}
    </React.Fragment>
  )
};

export default RecipeList;
