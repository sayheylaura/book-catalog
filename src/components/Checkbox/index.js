import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
	render() {
		const {
			genre,
			genreFilters,
			handleBoxChange
		} = this.props;

		return (
			<label className="checkbox__label" htmlFor={genre}>
				<input
					className="checkbox__box"
					type="checkbox"
					id={genre}
					name={genre}
					value={genre}
					onChange={handleBoxChange}
					checked={genreFilters.includes(genre)}
				/>
				{genre}
			</label>
		);
	}
}

Checkbox.propTypes = {
	genre: PropTypes.string.isRequired,
	genreFilters: PropTypes.array.isRequired,
	handleBoxChange: PropTypes.func.isRequired
}

export default Checkbox;
