import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {faStar, faHeart, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './ListHeader.css';

class ListHeader extends React.Component {
  constructor(props) {
    super(props);

    this.headerMap = {
      'my-recipes': 'My Recipes',
      favorites: 'Favorites',
      search: 'Search'
    };
  }

  componentDidMount() {
    const {headerMap, props} = this;

    if (!headerMap[props.selected]) {
      props.history.replace('/search');
    }
  }

  render() {
    const {headerMap, props} = this;

    return (
      <div className={styles['list-header']}>
        <h2>{headerMap[props.selected]}</h2>
        <div>
          <Link to='/my-recipes' className={styles['nav-item']}>
            <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          </Link>
          <Link to='/favorites' className={styles['nav-item']}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
          </Link>
          <Link to='/search' className={styles['nav-item']}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
          </Link>
        </div>
      </div>
    );
  }
}

ListHeader.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  selected: PropTypes.string
};

export default withRouter(ListHeader);
