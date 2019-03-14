import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
  render() { 
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">Catalog</li>
          <li className="menu__item">Edition</li>
        </ul>
      </nav>
    );
  }
}

export default Menu;