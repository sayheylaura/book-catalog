import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

class FormItem extends Component {
	render() {
		const {
			ind,
			books,
			book,
			handleFieldChange
		} = this.props;

		const {
			title,
			price,
			//genres
		} = book;

		return (
			<div className="form__item">
				<h2 className="form-item__description">{`Book ${ind + 1} of ${books.length}`}</h2>
				<Input
					labelContent="Title"
					labelStyles="field__label"
					labelContentStyles="field__label-title"
					inputStyles="field__box"
					inputType="text"
					inputName="title"
					inputValue={title}
					example="Ex: Mafalda"
					handleInputChange={handleFieldChange}
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
					handleInputChange={handleFieldChange}
				/>
			</div>
		);
	}
}

FormItem.propTypes = {
	ind: PropTypes.number.isRequired,
	books: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
	book: PropTypes.object.isRequired,
	handleFieldChange: PropTypes.func.isRequired
}

export default FormItem;
