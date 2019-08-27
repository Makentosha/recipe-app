import * as actionTypes from './actionTyps';

export const getRecipeList = (payload) => {
  return {
    type: actionTypes.getRecipeList,
    payload
  };
};

export const getRecipeListSuccess = (payload) => {
  return {
    type: actionTypes.getRecipeListSuccess,
    payload
  };
};

export const getRecipeListError = () => {
  return {
    type: actionTypes.getRecipeListError
  };
};

export const getRecipeDetails = (payload) => {
  return {
    type: actionTypes.getRecipeDetails,
    payload
  };
};

export const getRecipeDetailsSuccess = (payload) => {
  return {
    type: actionTypes.getRecipeDetailsSuccess,
    payload
  };
};

export const getRecipeDetailsError = () => {
  return {
    type: actionTypes.getRecipeDetails
  };
};

export const saveRecipe = (payload) => {
  return {
    type: actionTypes.saveRecipe,
    payload
  };
};

export const saveRecipeSuccess = () => {
  return {
    type: actionTypes.saveRecipeSuccess
  };
};

export const getMyRecipes = () => {
  return {
    type: actionTypes.getMyRecipes
  };
};

export const getMyRecipesSuccess = (payload) => {
  return {
    type: actionTypes.getMyRecipesSuccess,
    payload
  };
};

export const clearRecipeList = () => {
  return {
    type: actionTypes.getMyRecipesSuccess
  };
};
