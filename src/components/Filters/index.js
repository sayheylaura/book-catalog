import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';

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
						<Checkbox
							key={ind}
							genre={genre}
							genreFilters={filters.genres}
							handleBoxChange={handleBoxChange}
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
