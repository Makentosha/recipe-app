import React from 'react';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import Input from 'components/shared/Input/Input';
import IngredientList from '../IngredientList/IngredientList';
import InputGroup from 'components/shared/InputGroup/InputGroup';
import styles from './RecipeForm.css';
import PropTypes from 'prop-types';
import Spinner from 'components/shared/Spinner/Spinner';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeForm: {
        title: {
          type: 'text',
          title: 'Title',
          value: ''
        },
        publisher: {
          type: 'text',
          title: 'Author',
          value: ''
        },
        ingredients: {
          type: 'ingredientList',
          title: 'Ingredients:',
          value: []
        },
        ingredient: {
          type: 'inputGroup',
          value: '',
          icon: faPlus,
          minLength: 3
        }
      }
    };

    this.handleInput = (input) => {
      return (value) => {
        this.setState((currentState) => {
          return {
            recipeForm: {
              ...currentState.recipeForm,
              [input]: {
                ...currentState.recipeForm[input],
                value
              }
            }
          };
        });
      };
    };

    this.handleFormSubmit = this.submitForm.bind(this);
    this.handleIngredientRemove = this.removeIngredient.bind(this);
    this.handleIngredientAdd = (event) => {
      event.preventDefault();
      this.addIngredient();
    };
  }

  addIngredient() {
    this.setState((currentState) => {
      const {ingredients, ingredient} = currentState.recipeForm;

      return {
        recipeForm: {
          ...currentState.recipeForm,
          ingredients: {
            ...ingredients,
            values: ingredients.value.push(ingredient.value)
          },
          ingredient: {
            ...ingredient,
            value: ''
          }
        }
      };
    });
  }

  removeIngredient(indexToRemove) {
    console.log(indexToRemove);
    const ingredients = this.state.recipeForm.ingredients.value;

    ingredients.splice(indexToRemove, 1);
    this.setState((currentState) => {
      return {
        recipeForm: {
          ...currentState.recipeForm,
          ingredients: {
            ...currentState.recipeForm.ingredients,
            value: ingredients
          }
        }
      };
    });
  }

  submitForm(event) {
    event.preventDefault();

    const formValue = {};

    Object.keys(this.state.recipeForm).forEach(key => {
      formValue[key] = this.state.recipeForm[key].value;
    });

    delete formValue.ingredient;
    this.props.formSubmit(formValue);
  }

  renderForm() {
    const {recipeForm} = this.state;

    return Object.keys(recipeForm).map((key) => {
      if (recipeForm[key].type === 'text') {
        return (<Input
          key={key}
          {...recipeForm[key]}
          id={key}
          onInput={this.handleInput(key)}/>);
      }

      if (recipeForm[key].type === 'ingredientList') {
        return <IngredientList
          key={key}
          {...recipeForm[key]}
          values={recipeForm[key].value}
          onRemove={this.handleIngredientRemove}/>;
      }

      if (recipeForm[key].type === 'inputGroup') {
        return <InputGroup
          key={key}
          {...recipeForm[key]}
          onInput={this.handleInput(key)}
          onIngredientAdd={this.handleIngredientAdd}/>;
      }

      return null;
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} style={{margin: '12px'}}>
        <fieldset disabled={this.props.isLoading}>
          { this.renderForm() }
          {
            this.props.isLoading
              ? <Spinner/>
              : <button className={styles['submit-button']}>Save</button>
          }
        </fieldset>
      </form>
    );
  }
}

RecipeForm.propTypes = {
  formSubmit: PropTypes.func,
  isLoading: PropTypes.bool
};


export default RecipeForm;
