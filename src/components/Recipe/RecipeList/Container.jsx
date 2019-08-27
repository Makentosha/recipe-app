import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import queryString from 'query-string';

import * as recipeSelectors from 'store/selectors';
import * as recipeSideEffects from 'store/sideEffects';
import * as recipeAction from 'store/actions';
import SearchInput from 'components/shared/SearchInput/SearchInput';

import ListHeader from './ListHeader/ListHeader';
import RecipeList from './RecipeList';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecipeList: props.match.params.selectedRecipeList
    };

    this.handleRecipeSearch = this.searchRecipe.bind(this);
    this.handleRecipeSelect = this.selectRecipe.bind(this);
  }

  componentDidMount() {
    const {query} = queryString.parse(this.props.location.search);
    const {selectedRecipeList} = this.state;

    if (query && selectedRecipeList === 'search') {
      this.searchRecipe(query);
    }

    if (selectedRecipeList === 'my-recipes') {
      this.props.fetchMyRecipesList();
    }
  }

  componentDidUpdate(prevProps) {
    const currentSelectedRecipeList = this.props.match.params.selectedRecipeList;

    if (currentSelectedRecipeList !== prevProps.match.params.selectedRecipeList) {
      if (currentSelectedRecipeList === 'my-recipes') {
        this.props.fetchMyRecipesList();
      }

      if (currentSelectedRecipeList === 'search') {
        this.props.clearRecipeList();
      }
    }
  }

  updateUrlQuery(query) {
    const {location, history} = this.props;
    const routeObject = { pathname: location.pathname };

    if (query) {
      routeObject.search = queryString.stringify({query});
    }

    history.push(routeObject);
  }

  searchRecipe(query) {
    this.updateUrlQuery(query);

    if (query.length >= 3) {
      this.props.fetchRecipeList(query);
    }
  }

  selectRecipe(recipe) {
    this.props.fetchRecipeDetails(recipe.recipe_id);
  }

  render() {
    const {
      match,
      isLoading,
      recipes
    } = this.props;

    const renderSearchInput = () => {
      return <SearchInput
        value={queryString.parse(this.props.location.search).query || ''}
        onInput={this.handleRecipeSearch}
      />;
    };

    return (
      <React.Fragment>
        <ListHeader
          selectedRecipeList={match.params.selectedRecipeList}/>
        <Route
          path='/search'
          render={renderSearchInput}/>
        <RecipeList
          isLoading={isLoading}
          recipes={recipes}
          onRecipeSearch={this.handleRecipeSearch}
          onRecipeSelect={this.handleRecipeSelect}/>
      </React.Fragment>
    );
  }
}

Container.propTypes = {
  fetchRecipeList: PropTypes.func,
  fetchMyRecipesList: PropTypes.func,
  fetchRecipeDetails: PropTypes.any,
  clearRecipeList: PropTypes.any,
  isLoading: PropTypes.bool,
  recipes: PropTypes.array,
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  params: PropTypes.object
};

function mapStoreToProps(state) {
  return {
    recipes: recipeSelectors.getRecipeList(state),
    isLoading: recipeSelectors.getRecipeListStatus(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRecipeList: recipeSideEffects.fetchRecipeList,
    fetchMyRecipesList: recipeSideEffects.fetchMyRecipesList,
    fetchRecipeDetails: recipeSideEffects.fetchRecipeDetails,
    clearRecipeList: recipeAction.clearRecipeList
  }, dispatch);
}

export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(Container));
