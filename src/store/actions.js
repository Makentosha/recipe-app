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
