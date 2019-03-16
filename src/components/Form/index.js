import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '../FormItem';

class Form extends Component {
	render() {
		const { books, handleFieldChange } = this.props;
		return (
			<form className="app__form">
				{books.map((book, ind) => {
					return (
						<FormItem
							key={ind}
							ind={ind}
							books={books}
							book={book}
							handleFieldChange={handleFieldChange}
						/>
					);
				})}
			</form>
		);
	}
}

Form.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
	handleFieldChange: PropTypes.func.isRequired
}

export default Form;
