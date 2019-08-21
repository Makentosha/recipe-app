import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeSelectors from 'store/selectors';
import * as recipeService from 'store/sideEffects';
import PropTypes from 'prop-types';

import RecipeForm from './RecipeForm/RecipeForm';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.submit.bind(this);
  }

  submit(form) {
    this.props.saveRecipe(form);
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{color: '#f69c84', padding: '0 42px'}}>Create a recipe</h2>

        <RecipeForm
          isLoading={this.props.isFormLoading}
          formSubmit={this.handleFormSubmit}/>

      </React.Fragment>
    );
  }
}

Container.propTypes = {
  isFormLoading: PropTypes.bool,
  saveRecipe: PropTypes.func
};

function mapStoreToProps(state) {
  return {
    isFormLoading: recipeSelectors.isLoadingRecipeForm(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveRecipe: recipeService.saveRecipeDetails
  }, dispatch);
}

export default connect(mapStoreToProps, mapDispatchToProps)(Container);
