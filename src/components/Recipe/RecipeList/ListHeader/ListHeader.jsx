import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faHeart, faSearch} from '@fortawesome/free-solid-svg-icons';

import styles from './ListHeader.css';

class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.params = props.match.params;
    this.headerMap = {
      'my-recipes': 'My Recipes',
      favorites: 'Favorites',
      search: 'Search'
    };
  }

  componentDidMount() {
    if (!this.headerMap[this.props.selected]) {
      this.props.history.replace('/search');
    }
  }

  render() {
    return (
      <div className={styles['list-header']}>
        <h2>{this.headerMap[this.props.match.params.selected]}</h2>
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
