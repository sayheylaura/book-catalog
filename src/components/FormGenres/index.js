import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { book } from '../../services/propTypes';
import './FormGenres.scss';
import Button from '../Button';
import FormGenreItem from '../FormGenreItem';

class FormGenres extends Component {
	constructor(props) {
		super(props);

		this.onAddGenre = this.onAddGenre.bind(this);
	}

	componentDidUpdate(prevState) {
		if (this.props.books !== prevState.books) {
			this.props.updateGenres();
		}
	}

	onAddGenre() {
		const { bookInd, handleAddGenre } = this.props;
		handleAddGenre(bookInd);
	}

	render() {
		const {
			bookInd,
			genres,
			handleGenreUpdate,
			handleRemoveGenre
		} = this.props;

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
								genreInd={ind}
								bookInd={bookInd}
								genres={genres}
								genre={genre}
								handleGenreUpdate={handleGenreUpdate}
								handleRemoveGenre={handleRemoveGenre}
							/>
						);
					})}
				</ul>

				<Button
					buttonType="button"
					buttonStyles="btn btn--small btn--add"
					handleBtnClick={this.onAddGenre}
				>
					<i className="fas fa-plus"></i>
				</Button>
			</div>
		);
	}
}

FormGenres.propTypes = {
	bookInd: PropTypes.number.isRequired,
	books: PropTypes.arrayOf(
		PropTypes.shape(book).isRequired
	).isRequired,
	genres: PropTypes.arrayOf(
		PropTypes.string
	).isRequired,
	updateGenres: PropTypes.func.isRequired,
	handleGenreUpdate: PropTypes.func.isRequired,
	handleAddGenre: PropTypes.func.isRequired,
	handleRemoveGenre: PropTypes.func.isRequired
}

export default FormGenres;
