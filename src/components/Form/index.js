import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '../FormItem';
import Button from '../Button';

class Form extends Component {
	render() {
		const {
			books,
			handleBookUpdate,
			handleAddBook,
			handleRemoveBook,
			handleGenreUpdate,
			handleAddGenre,
			handleRemoveGenre
		} = this.props;

		return (
			<form className="app__form">
				<ul className="form__books-list">
					{books.map((book, ind) => {
						return (
							<FormItem
								key={ind}
								bookInd={ind}
								books={books}
								book={book}
								handleBookUpdate={handleBookUpdate}
								handleRemoveBook={handleRemoveBook}
								handleGenreUpdate={handleGenreUpdate}
								handleAddGenre={handleAddGenre}
								handleRemoveGenre={handleRemoveGenre}
							/>
						);
					})}
				</ul>

				<Button
					buttonType="button"
					buttonStyles="btn btn-add"
					handleBtnClick={handleAddBook}
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
	handleBookUpdate: PropTypes.func.isRequired,
	handleAddBook: PropTypes.func.isRequired,
	handleRemoveBook: PropTypes.func.isRequired,
	handleGenreUpdate: PropTypes.func.isRequired,
	handleAddGenre: PropTypes.func.isRequired,
	handleRemoveGenre: PropTypes.func.isRequired
}

export default Form;
