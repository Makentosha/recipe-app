import * as recipeActions from './actions';

import {getRecipeDetails, getRecipes} from '../services/service';

export const fetchRecipeList = (payload) => {
  return dispatch => {
    dispatch(recipeActions.getRecipeList());

    getRecipes(payload)
      .then((res) => {
        dispatch(recipeActions.getRecipeListSuccess(res.data.recipes));
      })
      .catch(error => {
        dispatch(recipeActions.getRecipeListError(error));
        console.log(error);
      });
  };
};

export const fetchRecipeDetails = (payload) => {
  return dispatch => {
    dispatch(recipeActions.getRecipeDetails());

    getRecipeDetails(payload)
      .then(res => {
        dispatch(recipeActions.getRecipeDetailsSuccess(res.data.recipe));
      })
      .catch(error => {
        dispatch(recipeActions.getRecipeDetailsError());
        console.log(error);
      });
  };
};
