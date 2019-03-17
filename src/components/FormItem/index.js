import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { book } from '../../services/propTypes';
import Input from '../Input';
import Button from '../Button';
import FormGenres from '../FormGenres';

class FormItem extends Component {
	constructor(props) {
		super(props);

		this.onBookUpdate = this.onBookUpdate.bind(this);
		this.onRemoveBook = this.onRemoveBook.bind(this);
	}

	onBookUpdate(e) {
		const { value, name } = e.currentTarget;
		const { bookInd, handleBookUpdate } = this.props;
		handleBookUpdate(bookInd, value, name);
	}

	onRemoveBook() {
		const { bookInd, handleRemoveBook } = this.props;
		handleRemoveBook(bookInd);
	}

	render() {
		const {
			bookInd,
			books,
			book,
			updateGenres,
			handleGenreUpdate,
			handleAddGenre,
			handleRemoveGenre
		} = this.props;

		const {
			id,
			title,
			price,
			genres
		} = book;

		return (
			<li className="form__item">
				<h2 className="form__item-description">
					{`Book ${id} of ${books.length}`}
				</h2>

				<Input
					labelContent="Title"
					labelStyles="field__label"
					labelContentStyles="field__label-title"
					inputStyles="field__box"
					inputType="text"
					inputName="title"
					inputValue={title}
					example="Ex: The Martian"
					handleInputChange={this.onBookUpdate}
				/>

				<Input
					labelContent="Price"
					labelStyles="field__label"
					labelContentStyles="field__label-title"
					inputStyles="field__box"
					inputType="number"
					inputName="price"
					inputValue={price}
					example="Ex: 9.99"
					handleInputChange={this.onBookUpdate}
				/>

				<FormGenres
					bookInd={bookInd}
					books={books}
					genres={genres}
					updateGenres={updateGenres}
					handleGenreUpdate={handleGenreUpdate}
					handleAddGenre={handleAddGenre}
					handleRemoveGenre={handleRemoveGenre}
				/>

				<Button
					buttonType="button"
					buttonStyles="btn btn-remove"
					handleBtnClick={this.onRemoveBook}
				>
					Remove book
				</Button>
			</li>
		);
	}
}

FormItem.propTypes = {
	bookInd: PropTypes.number.isRequired,
	books: PropTypes.arrayOf(
		PropTypes.shape(book).isRequired
	).isRequired,
	book: PropTypes.shape(book).isRequired,
	updateGenres: PropTypes.func.isRequired,
	handleBookUpdate: PropTypes.func.isRequired,
	handleRemoveBook: PropTypes.func.isRequired,
	handleGenreUpdate: PropTypes.func.isRequired,
	handleAddGenre: PropTypes.func.isRequired,
	handleRemoveGenre: PropTypes.func.isRequired
}

export default FormItem;
