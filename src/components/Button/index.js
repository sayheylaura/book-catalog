import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonType, buttonStyles, children, handleBtnClick }) => {
	return (
		<button
			className={buttonStyles}
			type={buttonType}
			onClick={handleBtnClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	buttonType: PropTypes.string.isRequired,
	buttonStyles: PropTypes.string.isRequired,
	handleBtnClick: PropTypes.func.isRequired
}

export default Button;
