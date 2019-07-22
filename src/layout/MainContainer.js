import React, {Suspense} from 'react';
import styles from './MainContainer.css';
import {connect} from "react-redux";

import FullWidthCol from '../hoc/FullHeightCol';
import Keys from '../context/context';
import * as recipeSelectors from '../store/selectors';
import RecipeListContainer from "../components/Recipe/RecipeList/RecipeListContainer";
import Spinner from '../SharedComponents/Spinner/Spinner';
import ShoppingListContainer from '../components/ShoppingList/ShoppingListContainer';

const LazyRecipeDetails = React.lazy(() => import('../components/Recipe/RecipeDetails/RecipeContainerDetails/RecipeDetailsContainer'));

class MainContainer extends React.Component {

  render() {
    const RecipeDetailsC = this.props.selectedRecipeDetails
      ? <Suspense fallback={<Spinner/>}>
        <LazyRecipeDetails
          title="pizza"
          recipeDetails={this.props.isRecipeSelected}/>
      </Suspense>
      : null;

    return (
      <div className={styles['main-container']}>
        <FullWidthCol flexGrow={1}>
          <Keys.Provider value={this.state}>
            <RecipeListContainer/>
          </Keys.Provider>
        </FullWidthCol>

        <FullWidthCol flexGrow={2}>
          {RecipeDetailsC}
        </FullWidthCol>

        <FullWidthCol flexGrow={1}>
          <ShoppingListContainer />
        </FullWidthCol>
      </div>
    )
  }
}

const stateToPropsMap = (state) => {
  return {
    isLoadingDetails: recipeSelectors.getRecipeStatus(state),
    selectedRecipeDetails: recipeSelectors.getRecipeDetails(state),
    isRecipeSelected: recipeSelectors.getIsSelectedRecipe(state)
  }
};

export default connect(stateToPropsMap)(MainContainer);
