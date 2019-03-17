import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { mainPropTypes } from '../../services/propTypes';
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
			updateGenres,
			handleBoxChange,
			handleBookUpdate,
			handleAddBook,
			handleRemoveBook,
			handleGenreUpdate,
			handleAddGenre,
			handleRemoveGenre
		} = this.props;

		const homeContent = (
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
						render={() => isLoading ? <Loader /> : homeContent}
					/>

					<Route
						path="/edition"
						render={() => {
							return (
								<Form
									books={books}
									updateGenres={updateGenres}
									handleBookUpdate={handleBookUpdate}
									handleAddBook={handleAddBook}
									handleRemoveBook={handleRemoveBook}
									handleGenreUpdate={handleGenreUpdate}
									handleAddGenre={handleAddGenre}
									handleRemoveGenre={handleRemoveGenre}
								/>
							);
						}}
					/>
				</Switch>
			</main>
		);
	}
}

Main.propTypes = mainPropTypes;

export default Main;
