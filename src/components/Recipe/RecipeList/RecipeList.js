import React from 'react';
import Recipe from './Recipe/Recipe';
import PropTypes from 'prop-types';

import RecipeExamples from './RecipeExamples/RecipeExamples';
import Spinner from 'components/shared/Spinner/Spinner';

function RecipeList(props) {
  const {isLoading, recipes, onRecipeSearch} = props;

  if (isLoading) {
    return <Spinner/>;
  }

  if (!recipes) {
    return <RecipeExamples onRecipeSearch={onRecipeSearch}/>;
  }

  if (!recipes.length) {
    return <h2>No recipe found</h2>;
  }

  return recipes.map((recipe, index) => {
    const handleRecipeSelect = () => props.recipeSelect(recipe);

    return (
      <Recipe
        key={index}
        text={recipe.title}
        publisher={recipe.publisher}
        imgUrl={recipe.image_url}
        clicked={handleRecipeSelect}/>
    );
  });
}

RecipeList.propTypes = {
  isLoading: PropTypes.bool,
  recipes: PropTypes.array,
  onRecipeSearch: PropTypes.func,
  recipeSelect: PropTypes.func
};

export default RecipeList;
