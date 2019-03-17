import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
		const { ind, handleBookUpdate } = this.props;
		handleBookUpdate(ind, value, name);
	}

	onRemoveBook() {
		const { ind, handleRemoveBook } = this.props;
		handleRemoveBook(ind);
	}

	render() {
		const {
			ind,
			books,
			book,
			handleAddGenre
		} = this.props;

		const {
			title,
			price,
			genres
		} = book;

		return (
			<li className="form__item">
				<h2 className="form__item-description">
					{`Book ${ind + 1} of ${books.length}`}
				</h2>

				<Input
					labelContent="Title"
					labelStyles="field__label"
					labelContentStyles="field__label-title"
					inputStyles="field__box"
					inputType="text"
					inputName="title"
					inputValue={title}
					example="Ex: Mafalda"
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
					parentInd={ind}
					genres={genres}
					handleAddGenre={handleAddGenre}
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
	ind: PropTypes.number.isRequired,
	books: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
	book: PropTypes.object.isRequired,
	handleBookUpdate: PropTypes.func.isRequired,
	handleRemoveBook: PropTypes.func.isRequired,
	handleAddGenre: PropTypes.func.isRequired
}

export default FormItem;
