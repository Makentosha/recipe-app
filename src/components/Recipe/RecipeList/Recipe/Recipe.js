import React from 'react';
import recipeStyles from './Recipe.css';
import PropTypes from 'prop-types';

const Recipe = (props) => (
  <div
    className={recipeStyles.recipe}
    onClick={props.clicked}>
    <img
      src={props.imgUrl}
      alt=""
      className={recipeStyles.foodImg}/>
    <div>
      <div className={recipeStyles.textContainer}>
        <p className={recipeStyles.shortTitle}>{props.text}</p>
        <p>{props.publisher}</p>
      </div>
    </div>
  </div>
);

Recipe.propTypes = {
  clicked: PropTypes.func,
  imgUrl: PropTypes.string,
  text: PropTypes.string,
  publisher: PropTypes.string
};

export default Recipe;
