import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPen,
  faMinus,
  faPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import style from './style.css';

class ShoppingListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [
        {
          amount: 10,
          x: '',
          ingredient: 'Eggs'
        },
        {
          amount: 2,
          x: '(packs)',
          ingredient: 'Sour cream'
        },
        {
          amount: 1,
          x: '(pack)',
          ingredient: 'Milk'
        },
        {
          amount: 2,
          x: '',
          ingredient: 'Bread'
        }
      ]
    };
  }

  onRemove(index) {
    this.setState((prevState) => {
      const listClone = [...prevState.shoppingList];
      listClone.splice(index, 1);

      return {
        shoppingList: listClone
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{color: '#f69c84', padding: '0 42px'}}>Shopping List</h2>

        <div style={{padding: '0 30px'}} className={style['shopping-list']}>
          {this.state.shoppingList.map((item, index) => {
            return (
              <div className={style['shopping-list-item']} key={index}>
                <div>
                  {item.ingredient} {item.x}
                  <FontAwesomeIcon
                    className={style.icon}
                    icon={faPen}/>
                </div>
                <div>
                  <FontAwesomeIcon
                    className={style.icon}
                    icon={faMinus}/>
                  {item.amount}
                  <FontAwesomeIcon
                    className={style.icon}
                    icon={faPlus}/>
                  <FontAwesomeIcon
                    className={`${style.icon} ${style.danger}`}
                    icon={faTimes}
                    onClick={() => this.onRemove(index)}/>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingListContainer;
