import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import queryString from 'query-string';

import * as recipeSelectors from 'store/selectors';
import * as recipeService from 'store/sideEffects';
import RecipeList from './RecipeList';
import SearchInput from 'components/shared/SearchInput/SearchInput';


class Container extends React.Component {
  constructor(props) {
    super(props);

    this.handleRecipeSearch = this.searchRecipe.bind(this);
    this.handleRecipeSelect = this.selectRecipe.bind(this);

    this.renderSearchInput = () => {
      return <SearchInput onInput={this.handleRecipeSearch}/>;
    };
  }

  componentDidMount() {
    const {query} = queryString.parse(this.props.location.search);

    if (query) {
      this.searchRecipe(query);
    }
  }

  searchRecipe(query) {
    if (query.length >= 3) {
      this.props.fetchRecipeList(query);
    }
  }

  selectRecipe(recipe) {
    this.props.fetchRecipeDetails(recipe.recipe_id);
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{paddingLeft: '42px', color: '#f69c84'}}>Recipes</h2>
        <Route
          path="/search"
          render={this.renderSearchInput}/>
        <RecipeList
          isLoading={this.props.isLoading}
          recipes={this.props.recipes}
          onRecipeSearch={this.handleRecipeSearch}
          recipeSelect={this.handleRecipeSelect}/>
      </React.Fragment>
    );
  }
}

Container.propTypes = {
  fetchRecipeList: PropTypes.func,
  fetchRecipeDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  recipes: PropTypes.array,
  location: PropTypes.object
};

function mapStoreToProps(state) {
  return {
    recipes: recipeSelectors.getRecipeList(state),
    isLoading: recipeSelectors.getRecipeListStatus(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRecipeList: recipeService.fetchRecipeList,
    fetchRecipeDetails: recipeService.fetchRecipeDetails
  }, dispatch);
}


export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(Container));
