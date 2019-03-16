import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Filters from '../Filters';
import BookList from '../BookList';

class Main extends Component {
	render() {
		const {
			books,
			genres,
			filters,
			handleBoxChange
		} = this.props;
		return (
			<main className="app__main">
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<Fragment>
									<Filters
										genres={genres}
										filters={filters}
										handleBoxChange={handleBoxChange}
									/>
									<BookList books={books} />
								</Fragment>
							);
						}}
					/>
				</Switch>
			</main>
		);
	}
}

Main.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
	genres: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	filters: PropTypes.object.isRequired,
	handleBoxChange: PropTypes.func.isRequired
}

export default Main;
