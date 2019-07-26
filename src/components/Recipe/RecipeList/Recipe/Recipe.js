import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const Recipe = (props) => (
  <div
    className={styles.recipe}
    onClick={props.clicked}>
    <img
      src={props.imgUrl}
      alt=""
      className={styles.foodImg}/>
    <div>
      <div className={styles.textContainer}>
        <p className={styles.shortTitle}>{props.text}</p>
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
