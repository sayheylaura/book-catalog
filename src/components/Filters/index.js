import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
				<p className="filters__description">Filter books by genre</p>

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
			</section>
		);
	}
}

Filters.propTypes = {
	allGenres: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	filters: PropTypes.object.isRequired,
	handleBoxChange: PropTypes.func.isRequired
}

export default Filters;
