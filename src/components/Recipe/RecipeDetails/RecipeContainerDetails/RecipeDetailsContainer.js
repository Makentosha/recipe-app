import React from 'react';
import {connect} from 'react-redux';

import * as recipeSelectors from '../../../../store/selectors';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import Spinner from '../../../../SharedComponents/Spinner/Spinner';

class RecipeDetailsContainer extends React.Component {

  render() {
    let spinner = this.props.isLoading ? (<Spinner />) : (<RecipeDetails recipeDetails={this.props.recipeDetails} />);

    return (
      <React.Fragment>
        {spinner}
      </React.Fragment>
    );

  }
}

const StateToPropsMap = (state) => {
  return {
    recipeDetails: recipeSelectors.getRecipeDetails(state),
    isLoading: recipeSelectors.getRecipeStatus(state)
  }
};

export default connect(StateToPropsMap)(RecipeDetailsContainer);
