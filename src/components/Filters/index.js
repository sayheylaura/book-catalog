import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';
import Input from '../Input';

class Filters extends Component {
	render() {
		const {
			allGenres,
			filters,
			handleBoxChange
		} = this.props;

		return (
			<section className="app__filters">
				<h2 className="filters__description">Filter books by genre</h2>

				<div className="filters__wrapper">
					{allGenres.map((genre, ind) => {
						return (
							<Input
								key={ind}
								labelContent={genre}
								labelStyles="checkbox__label"
								labelContentStyles="checkbox__label-title"
								inputStyles="checkbox__box"
								inputType="checkbox"
								inputName={genre}
								inputValue={genre}
								isChecked={filters.genres.includes(genre)}
								handleInputChange={handleBoxChange}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

Filters.propTypes = {
	allGenres: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	filters: PropTypes.objectOf(
		PropTypes.arrayOf(
			PropTypes.string.isRequired
		).isRequired
	).isRequired,
	handleBoxChange: PropTypes.func.isRequired
}

export default Filters;
