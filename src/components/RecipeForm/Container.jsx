import React from 'react';
import RecipeForm from './RecipeForm/RecipeForm';

function Container() {
  // ToDo: add save functionality
  const submit = (form) => {
    console.log(form);
  };

  return (
      <React.Fragment>
        <h2 style={{color: '#f69c84', padding: '0 42px'}}>Create a recipe</h2>

        <RecipeForm formSubmit={submit}/>

      </React.Fragment>
  );
}

export default Container;
