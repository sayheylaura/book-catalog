import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormItem extends Component {
	render() {
		const { book } = this.props;
		return (
			<div className="form__item">
				{book.title}
			</div>
		);
	}
}

FormItem.propTypes = {
	book: PropTypes.object.isRequired
}

export default FormItem;
