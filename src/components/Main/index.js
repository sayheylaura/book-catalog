import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Filters from '../Filters';
import BookList from '../BookList';
import Loader from '../Loader';
import Form from '../Form';

class Main extends Component {
	render() {
		const {
			books,
			filteredBooks,
			allGenres,
			filters,
			isLoading,
			handleBoxChange,
			handleFieldChange,
			addItem
		} = this.props;

		const contentToRender = (
			<Fragment>
				<Filters
					allGenres={allGenres}
					filters={filters}
					handleBoxChange={handleBoxChange}
				/>
				<BookList filteredBooks={filteredBooks} />
			</Fragment>
		);

		return (
			<main className="app__main">
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							if (isLoading) {
								return <Loader />
							} else {
								return contentToRender;
							}
						}}
					/>

					<Route
						path="/edition"
						render={() => {
							return (
								<Form
									books={books}
									handleFieldChange={handleFieldChange}
									addItem={addItem}
								/>
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
	filteredBooks: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
	allGenres: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	filters: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
	handleBoxChange: PropTypes.func.isRequired,
	handleFieldChange: PropTypes.func.isRequired,
	addItem: PropTypes.func.isRequired
}

export default Main;
