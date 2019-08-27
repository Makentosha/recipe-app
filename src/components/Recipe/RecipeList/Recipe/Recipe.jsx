import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

function Recipe(props) {
  const {
    clicked,
    imgUrl,
    text,
    publisher
  } = props;

  const defaultImgUrl = 'https://static.food2fork.com/Roasted2BCauliflower2Band2BAged2BWhite2BCheddar2BSoup2B5002B68640e245c89.jpg';

  return (<div
    className={styles.recipe}
    onClick={clicked}>
    <img
      src={imgUrl || defaultImgUrl}
      alt={text}
      className={styles.foodImg}/>
    <div>
      <div className={styles.textContainer}>
        <p className={styles.shortTitle}>{text}</p>
        <p>{publisher}</p>
      </div>
    </div>
  </div>);
}

Recipe.propTypes = {
  clicked: PropTypes.func,
  imgUrl: PropTypes.string,
  text: PropTypes.string,
  publisher: PropTypes.string
};

export default Recipe;
