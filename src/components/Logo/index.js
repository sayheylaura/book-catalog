import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = ({ size }) => {
	return (
		<Link to="/">
			<div className={`logo__container ${size}`}>
				<img src={logo} alt="Logo" className="logo__image"></img>
			</div>
		</Link>
	);
}

Logo.propTypes = {
	size: PropTypes.string.isRequired
}

export default Logo;
