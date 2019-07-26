import React from 'react';
import styles from './MainContainer.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FullHeightCol from '../hoc/FullHeightCol';
import Keys from '../context/context';
import * as recipeSelectors from '../store/selectors';
import RecipeListContainer from '../components/Recipe/RecipeList/RecipeListContainer';
import ShoppingListContainer from '../components/ShoppingList/ShoppingListContainer';
import RecipeDetailsContainer
  from '../components/Recipe/RecipeDetails/RecipeContainerDetails/RecipeDetailsContainer';

class MainContainer extends React.Component {
  recipeDetailsComponent() {
    if (this.props.isRecipeSelected) {
      return <RecipeDetailsContainer
        title="pizza"
        recipeDetails={this.props.selectedRecipeDetails}/>;
    }

    return <div/>;
  }

  render() {
    return (
      <div className={styles['main-container']}>
        <FullHeightCol flexGrow={1}>
          <Keys.Provider value={this.state}>
            <RecipeListContainer/>
          </Keys.Provider>
        </FullHeightCol>

        <FullHeightCol flexGrow={2}>
          {this.recipeDetailsComponent()}
        </FullHeightCol>

        <FullHeightCol flexGrow={1}>
          <ShoppingListContainer/>
        </FullHeightCol>
      </div>
    );
  }
}

MainContainer.propTypes = {
  isRecipeSelected: PropTypes.any,
  selectedRecipeDetails: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    isLoadingDetails: recipeSelectors.getRecipeStatus(state),
    selectedRecipeDetails: recipeSelectors.getRecipeDetails(state),
    isRecipeSelected: recipeSelectors.getIsSelectedRecipe(state)
  };
};

export default connect(mapStateToProps)(MainContainer);
