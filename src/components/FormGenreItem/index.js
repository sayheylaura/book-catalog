import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';

class FormGenreItem extends Component {
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
					handleBtnClick={this.onRemoveItem}
				>
					Remove genre
				</Button>
			</li>
		);
	}
}

export default FormGenreItem;
