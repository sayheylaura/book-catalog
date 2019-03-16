import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';

class Filters extends Component {
	render() {
		const {
			genres,
			//filters,
			handleBoxChange
		} = this.props;
		return (
			<section className="app__filters">
				<p>Filter books by genre</p>
				{genres.map((genre, ind) => {
					return (
						<Checkbox
							key={ind}
							genre={genre}
							handleBoxChange={handleBoxChange}
						/>
					);
				})}
			</section>
		);
	}
}

Filters.propTypes = {
	genres: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	filters: PropTypes.object.isRequired,
	handleBoxChange: PropTypes.func.isRequired
}

export default Filters;
