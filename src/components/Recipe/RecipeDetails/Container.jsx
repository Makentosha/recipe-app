import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as recipeSelectors from 'store/selectors';
import Spinner from 'components/shared/Spinner/Spinner';
import RecipeDetails from './RecipeDetails/RecipeDetails';

class Container extends React.Component {
  render() {
    const {isLoading, recipeDetails} = this.props;

    return isLoading
      ? (<Spinner/>)
      : (<RecipeDetails {...recipeDetails}/>);
  }
}

Container.propTypes = {
  isLoading: PropTypes.bool,
  recipeDetails: PropTypes.object
};

function mapStateToProps(state) {
  return {
    recipeDetails: recipeSelectors.getRecipeDetails(state),
    isLoading: recipeSelectors.getRecipeStatus(state)
  };
}

export default connect(mapStateToProps)(Container);
