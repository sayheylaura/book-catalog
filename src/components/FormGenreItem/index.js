import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

class FormGenreItem extends Component {
	constructor(props) {
		super(props);

		this.onGenreUpdate = this.onGenreUpdate.bind(this);
		this.onRemoveGenre = this.onRemoveGenre.bind(this);
	}

	onGenreUpdate(e) {
		const { value } = e.currentTarget;
		const { bookInd, genreInd, handleGenreUpdate } = this.props;
		handleGenreUpdate(bookInd, genreInd, value);
	}

	onRemoveGenre() {
		const { bookInd, genreInd, handleRemoveGenre } = this.props;
		handleRemoveGenre(bookInd, genreInd);
	}

	render() {
		const { genreInd, genres, genre } = this.props;
		return (
			<li className="form__genres-item">
				<Input
					labelContent={`Genre ${genreInd + 1} of ${genres.length}`}
					labelStyles="field__label"
					labelContentStyles="field__label-title"
					inputStyles="field__box"
					inputType="text"
					inputName="genre"
					inputValue={genre}
					example="Ex: science fiction"
					handleInputChange={this.onGenreUpdate}
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
	genreInd: PropTypes.number.isRequired,
	bookInd: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(
		PropTypes.string
	).isRequired,
	genre: PropTypes.string.isRequired,
	handleGenreUpdate: PropTypes.func.isRequired,
	handleRemoveGenre: PropTypes.func.isRequired
}

export default FormGenreItem;
