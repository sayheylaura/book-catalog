import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
	render() {
		const {
			labelContent,
			labelStyles,
			labelContentStyles,
			inputStyles,
			inputType,
			inputName,
			inputValue,
			example,
			isChecked,
			handleInputChange
		} = this.props;

		return (
			<label className={labelStyles} htmlFor={inputName}>
				<span className={labelContentStyles}>
					{labelContent}
				</span>

				<input
					className={inputStyles}
					type={inputType}
					id={inputName}
					name={inputName}
					value={inputValue}
					placeholder={example}
					checked={isChecked}
					onChange={handleInputChange}
				/>
			</label>
		);
	}
}

Input.propTypes = {
	labelContent: PropTypes.string.isRequired,
	labelStyles: PropTypes.string.isRequired,
	labelContentStyles: PropTypes.string.isRequired,
	inputStyles: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	example: PropTypes.string,
	isChecked: PropTypes.bool,
	handleInputChange: PropTypes.func.isRequired
};

export default Input;
