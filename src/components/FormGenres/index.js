import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import FormGenreItem from '../FormGenreItem';

class FormGenres extends Component {
	constructor(props) {
		super(props);

		this.onAddGenre = this.onAddGenre.bind(this);
	}

	onAddGenre() {
		const { parentInd, handleAddGenre } = this.props;
		handleAddGenre(parentInd);
	}

	render() {
		const { genres } = this.props;

		return (
			<div className="form__genres-wrapper">
				<h3 className="form__genres-title">
					Genres
				</h3>

				<ul className="form__genres-list">
					{genres.map((genre, ind) => {
						return (
							<FormGenreItem
								key={ind}
								ind={ind}
								genres={genres}
								genre={genre}
							/>
						);
					})}
				</ul>

				<Button
					buttonType="button"
					buttonStyles="btn btn-add"
					handleBtnClick={this.onAddGenre}
				>
					Add genre
				</Button>
			</div>
		);
	}
}

FormGenres.propTypes = {
	parentInd: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(
		PropTypes.string
	).isRequired,
	handleAddGenre: PropTypes.func.isRequired
}

export default FormGenres;
