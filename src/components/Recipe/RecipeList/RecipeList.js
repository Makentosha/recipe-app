import React from 'react';
import Recipe from './Recipe/Recipe';
import PropTypes from 'prop-types';

import RecipeExamples from './RecipeExamples/RecipeExamples';
import Spinner from 'components/shared/Spinner/Spinner';

const RecipeList = (props) => {
  let recipes;

  if (props.isLoading) {
    recipes = <Spinner />;
  } else if (!props.recipes) {
    recipes = <RecipeExamples onRecipeSearch={props.onRecipeSearch} />;
  } else if (!props.recipes.length) {
    recipes = <h2>No recipe found</h2>;
  } else {
    recipes = props.recipes.map((recipe, index) => {
      return (
        <Recipe
          key={index}
          text={recipe.title}
          publisher={recipe.publisher}
          imgUrl={recipe.image_url}
          clicked={() => props.recipeSelect(recipe)}/>
      );
    });
  }

  return (
    <React.Fragment>
      {recipes}
    </React.Fragment>
  );
};

RecipeList.propTypes = {
  isLoading: PropTypes.bool,
  recipes: PropTypes.array,
  onRecipeSearch: PropTypes.func,
  recipeSelect: PropTypes.func
};

export default RecipeList;
