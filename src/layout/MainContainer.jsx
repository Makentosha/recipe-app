import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as recipeSelectors from 'store/selectors';
import RecipeListContainer from 'components/Recipe/RecipeList/Container';
import ShoppingListContainer from 'components/RecipeForm/Container';
import RecipeDetailsContainer from 'components/Recipe/RecipeDetails/Container';

import styles from './MainContainer.css';

class MainContainer extends React.Component {
  componentDidMount() {
    if (this.props.match.url === '/') {
      this.props.history.push('/search');
    }
  }

  render() {
    const {selectedRecipeDetails, isRecipeSelected} = this.props;

    const RecipeDetails = <RecipeDetailsContainer recipeDetails={selectedRecipeDetails}/>;

    return (
      <div className={styles['main-container']}>
        <div className={styles.column} style={{width: '25%'}}>
          <RecipeListContainer/>
        </div>

        <div className={styles.column} style={{width: '50%'}}>
          {isRecipeSelected ? RecipeDetails : null}
        </div>

        <div className={styles.column} style={{width: '25%'}}>
          <ShoppingListContainer/>
        </div>
      </div>
    );
  }
}

MainContainer.propTypes = {
  isRecipeSelected: PropTypes.any,
  selectedRecipeDetails: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object
};

function mapStateToProps(state) {
  return {
    isLoadingDetails: recipeSelectors.getRecipeStatus(state),
    selectedRecipeDetails: recipeSelectors.getRecipeDetails(state),
    isRecipeSelected: recipeSelectors.getIsSelectedRecipe(state)
  };
}

export default connect(mapStateToProps)(MainContainer);
