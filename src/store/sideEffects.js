import uuid from 'uuid/v4';

import * as recipeActions from './actions';
import * as recipeService from '../services/service';

export const fetchRecipeList = (payload) => {
  return (dispatch) => {
    dispatch(recipeActions.getRecipeList());

    recipeService.getRecipes(payload)
      .then((res) => {
        dispatch(recipeActions.getRecipeListSuccess(res.data.recipes));
      })
      .catch(error => {
        if (error.message !== 'cancel') {
          dispatch(recipeActions.getRecipeListError(error));
          console.log(error);
        }
      });
  };
};

export const fetchMyRecipesList = () => {
  return (dispatch) => {
    dispatch(recipeActions.getMyRecipes());

    recipeService.getMyRecipes()
      .then((res) => {
        dispatch(recipeActions.getMyRecipesSuccess(res));
      });
  };
};

export const fetchRecipeDetails = (payload) => {
  return (dispatch) => {
    dispatch(recipeActions.getRecipeDetails());

    recipeService.getRecipeDetails(payload)
      .then(res => {
        dispatch(recipeActions.getRecipeDetailsSuccess(res.data.recipe));
      })
      .catch(error => {
        if (error.message !== 'cancel') {
          dispatch(recipeActions.getRecipeDetailsError());
          console.log(error);
        }
      });
  };
};

export const saveRecipeDetails = (payload) => {
  return (dispatch) => {
    dispatch(recipeActions.saveRecipe());

    const recipe = payload;
    recipe.recipe_id = uuid();

    recipeService.saveRecipe(recipe)
      .then(() => {
        dispatch(recipeActions.saveRecipeSuccess());
      });
  };
};
