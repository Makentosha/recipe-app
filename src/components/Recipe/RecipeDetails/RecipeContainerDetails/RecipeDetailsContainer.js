import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as recipeSelectors from 'store/selectors';
import Spinner from 'components/shared/Spinner/Spinner';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

class RecipeDetailsContainer extends React.Component {
  render() {
    return this.props.isLoading
      ? (<Spinner/>)
      : (<RecipeDetails recipeDetails={this.props.recipeDetails}/>);
  }
}

RecipeDetailsContainer.propTypes = {
  isLoading: PropTypes.bool,
  recipeDetails: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    recipeDetails: recipeSelectors.getRecipeDetails(state),
    isLoading: recipeSelectors.getRecipeStatus(state)
  };
};

export default connect(mapStateToProps)(RecipeDetailsContainer);
