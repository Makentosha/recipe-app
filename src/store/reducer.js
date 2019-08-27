import * as recipeActions from './actionTyps';

const recipeReducer = (state, action) => {
  switch (action.type) {
    case recipeActions.getRecipeList:
      return {
        ...state,
        recipeList: {
          ...state.recipeList,
          isLoading: true
        }
      };
    case recipeActions.getRecipeListError:
      return {
        ...state,
        recipeList: {
          ...state.recipeList,
          isLoading: false
        }
      };
    case recipeActions.getRecipeListSuccess:
      return {
        ...state,
        recipeList: {
          ...state.recipeDetails,
          recipes: action.payload,
          isLoading: false
        }
      };
    case recipeActions.getRecipeDetails:
      return {
        ...state,
        recipeDetails: {
          ...state.recipeDetails,
          isLoading: true,
          isSelected: true
        }
      };
    case recipeActions.getRecipeDetailsSuccess:
      return {
        ...state,
        recipeDetails: {
          details: action.payload,
          isLoading: false,
          isSelected: true
        }
      };
    case recipeActions.getRecipeDetailsError:
      return {
        ...state,
        recipeDetails: {
          ...state.recipeDetails,
          isLoading: false
        }
      };
    case recipeActions.saveRecipe:
      return {
        ...state,
        recipeForm: {
          isLoading: true
        }
      };
    case recipeActions.saveRecipeSuccess:
      return {
        ...state,
        recipeForm: {
          isLoading: false
        }
      };
    case recipeActions.getMyRecipes:
      return {
        ...state,
        recipeList: {
          ...state.recipeList.recipes,
          isLoading: true
        }
      };
    case recipeActions.getMyRecipesSuccess:
      return {
        ...state,
        recipeList: {
          recipes: action.payload,
          isLoading: false
        }
      };
    case recipeActions.clearRecipeList:
      return {
        ...state,
        recipeList: {
          ...state.recipeList,
          recipes: null
        }
      };
    default:
      return state;
  }
};

export default recipeReducer;
