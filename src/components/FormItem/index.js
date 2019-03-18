import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { book } from '../../services/propTypes';
import './FormItem.scss';
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
			title,
			price,
			genres
		} = book;

		return (
			<li className="form__books-item">
				<div className="form-item__title-wrapper">
					<h2 className="form-item__title">
						{`Book ${bookInd + 1} of ${books.length}`}
					</h2>

					<Button
						buttonType="button"
						buttonStyles="btn btn--medium btn--remove"
						handleBtnClick={this.onRemoveBook}
					>
						<i className="fas fa-trash-alt"></i>
					</Button>
				</div>

				<div className="form-item__content-wrapper">
					<div className="form-item__fields-wrapper">
						<h3 className="form__genres-title">
							General info
						</h3>

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
					</div>

					<FormGenres
						bookInd={bookInd}
						books={books}
						genres={genres}
						updateGenres={updateGenres}
						handleGenreUpdate={handleGenreUpdate}
						handleAddGenre={handleAddGenre}
						handleRemoveGenre={handleRemoveGenre}
					/>
				</div>
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
