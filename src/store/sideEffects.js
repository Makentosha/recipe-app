import * as recipeActions from './actions';

import {getRecipeDetails, getRecipes, saveRecipe} from '../services/service';

export const fetchRecipeList = (payload) => {
  return (dispatch) => {
    dispatch(recipeActions.getRecipeList());

    getRecipes(payload)
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

export const fetchRecipeDetails = (payload) => {
  return (dispatch) => {
    dispatch(recipeActions.getRecipeDetails());

    getRecipeDetails(payload)
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

    saveRecipe(payload)
      .then(() => {
        dispatch(recipeActions.saveRecipeSuccess());
      });
  };
};
