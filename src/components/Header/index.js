import React, { Component } from 'react';
import './Header.scss';
import Logo from '../Logo';
import Menu from '../Menu';

class Header extends Component {
  render() { 
    return (
      <header className="app__header">
        <Logo size="logo__container--header" />
        <Menu />
      </header>
    );
  }
}

export default Header;