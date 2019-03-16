import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '../FormItem';
import Button from '../Button';

class Form extends Component {
	render() {
		const {
			books,
			handleFieldChange,
			addItem
		} = this.props;

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

				<Button
					buttonType="button"
					buttonStyles="btn btn-add"
					handleBtnClick={addItem}
				>
					Add
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
	addItem: PropTypes.func.isRequired
}

export default Form;
