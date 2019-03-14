import React, { Component } from 'react';
import './Header.scss';
import Logo from '../Logo';

class Header extends Component {
  render() { 
    return (
      <header className="app__header">
        <Logo size="logo__container--header" />
      </header>
    );
  }
}

export default Header;