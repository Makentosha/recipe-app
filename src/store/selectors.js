export const getRecipeList = (state) => state.recipeList.recipes;
export const getRecipeListStatus = (state) => state.recipeList.isLoading;

export const getRecipeDetails = (state) => state.recipeDetails.details;
export const getRecipeStatus = (state) => state.recipeDetails.isLoading;
export const getIsSelectedRecipe = (state) => state.recipeDetails.isSelected;
