import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import './Logo.scss';

const Logo = ({ size }) => {
  return (
    <div className={`logo__container ${size}`}>
      <img src={logo} alt="Logo" className="logo__image"></img>
    </div>
  );
}

Logo.propTypes = {
  size: PropTypes.string.isRequired
}

export default Logo;