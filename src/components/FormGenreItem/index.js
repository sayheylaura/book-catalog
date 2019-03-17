import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

class FormGenreItem extends Component {
	constructor(props) {
		super(props);

		this.onRemoveGenre = this.onRemoveGenre.bind(this);
	}

	onRemoveGenre() {
		const { bookInd, ind, handleRemoveGenre } = this.props;
		handleRemoveGenre(bookInd, ind);
	}

	render() {
		const { ind, genres, genre } = this.props;
		return (
			<li className="form__genres-item">
				<Input
					labelContent={`Genre ${ind + 1} of ${genres.length}`}
					labelStyles="field__label"
					labelContentStyles="field__label-title"
					inputStyles="field__box"
					inputType="text"
					inputName="genre"
					inputValue={genre}
					example="Ex: science fiction"
					handleInputChange={this.onFieldChange}
				/>

				<Button
					buttonType="button"
					buttonStyles="btn btn-remove"
					handleBtnClick={this.onRemoveGenre}
				>
					Remove genre
				</Button>
			</li>
		);
	}
}
FormGenreItem.propTypes = {
	ind: PropTypes.number.isRequired,
	bookInd: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(
		PropTypes.string
	).isRequired,
	genre: PropTypes.string.isRequired,
	handleRemoveGenre: PropTypes.func.isRequired
}

export default FormGenreItem;
