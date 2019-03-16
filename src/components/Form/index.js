import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '../FormItem';

class Form extends Component {
	render() {
		const { books } = this.props;
		return (
			<form className="app__form">
				{books.map((book, ind) => <FormItem key={ind} book={book} />)}
			</form>
		);
	}
}

Form.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired
}

export default Form;
