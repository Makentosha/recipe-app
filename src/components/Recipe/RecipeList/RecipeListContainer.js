import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as recipeSelectors from '../../../store/selectors';
import * as recipeService from '../../../store/sideEffects';
import RecipeList from './RecipeList';
import SearchInput from '../../../SharedComponents/SearchInput/SearchInput';
import {bindActionCreators} from 'redux';


class RecipeListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSearchQuery: ''
    };
  }

  searchRecipe(query) {
    this.setState({recipeSearchQuery: query});
    if (query.length >= 3) {
      this.props.fetchRecipeList(query);
    }
  }

  onRecipeSelect(recipe) {
    this.props.fetchRecipeDetails(recipe.recipe_id);
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{paddingLeft: '42px', color: '#f69c84'}}>Recipes</h2>
        <SearchInput
          onInput={(e) => this.searchRecipe(e.target.value)}
          value={this.state.recipeSearchQuery}/>
        <RecipeList
          isLoading={this.props.isLoading}
          recipes={this.props.recipes}
          recipeSelect={(recipe) => this.onRecipeSelect(recipe)}
          onRecipeSearch={(query) => this.searchRecipe(query)}/>
      </React.Fragment>
    );
  }
}

RecipeListContainer.propTypes = {
  fetchRecipeList: PropTypes.func,
  fetchRecipeDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  recipes: PropTypes.array
};

const storeToPropsMap = (state) => {
  return {
    recipes: recipeSelectors.getRecipeList(state),
    isLoading: recipeSelectors.getRecipeListStatus(state)
  };
};

const dispatchToPropsMap = (dispatch) => bindActionCreators({
  fetchRecipeList: recipeService.fetchRecipeList,
  fetchRecipeDetails: recipeService.fetchRecipeDetails
}, dispatch);

export default connect(storeToPropsMap, dispatchToPropsMap)(RecipeListContainer);
