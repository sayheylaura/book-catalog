import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, url }) => {
  return (
    <Link to={url} className="menu__link">
      <li className="menu__item">{title}</li>
    </Link>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default MenuItem;