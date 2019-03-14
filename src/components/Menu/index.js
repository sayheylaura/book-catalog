import React, { Component } from 'react';
import './Menu.scss';
import MenuItem from '../MenuItem';

class Menu extends Component {
  render() { 
    return (
      <nav className="menu">
        <ul className="menu__list">
          <MenuItem title="Catalog" url="/" />
          <MenuItem title="Edition" url="/edition" />
        </ul>
      </nav>
    );
  }
}

export default Menu;