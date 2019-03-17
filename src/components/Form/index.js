import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '../FormItem';
import Button from '../Button';

class Form extends Component {
	render() {
		const {
			books,
			handleFieldChange,
			addItem,
			removeItem
		} = this.props;

		return (
			<form className="app__form">
				<ul className="form__books-list">
					{books.map((book, ind) => {
						return (
							<FormItem
								key={ind}
								ind={ind}
								books={books}
								book={book}
								handleFieldChange={handleFieldChange}
								removeItem={removeItem}
							/>
						);
					})}
				</ul>

				<Button
					buttonType="button"
					buttonStyles="btn btn-add"
					handleBtnClick={addItem}
				>
					Add book
				</Button>
			</form>
		);
	}
}

Form.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
	handleFieldChange: PropTypes.func.isRequired,
	addItem: PropTypes.func.isRequired,
	removeItem: PropTypes.func.isRequired
}

export default Form;
