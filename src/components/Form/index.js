import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '../FormItem';
import Button from '../Button';

class Form extends Component {
	constructor(props) {
		super(props);

		this.onAddBook = this.onAddBook.bind(this);
	}

	onAddBook() {
		const { books, handleAddBook } = this.props;
		handleAddBook(books);
	}

	render() {
		const {
			books,
			updateGenres,
			handleBookUpdate,
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
								updateGenres={updateGenres}
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
					handleBtnClick={this.onAddBook}
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
	updateGenres: PropTypes.func.isRequired,
	handleBookUpdate: PropTypes.func.isRequired,
	handleAddBook: PropTypes.func.isRequired,
	handleRemoveBook: PropTypes.func.isRequired,
	handleGenreUpdate: PropTypes.func.isRequired,
	handleAddGenre: PropTypes.func.isRequired,
	handleRemoveGenre: PropTypes.func.isRequired
}

export default Form;
