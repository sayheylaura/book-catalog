import React, { Component } from 'react';
import './App.scss';
import { books } from '../../data/bookData';
import { allGenres } from '../../data/genreData';
import Header from '../Header';
import Main from '../Main';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: books,
			genres: allGenres,
			filters: {
				genres: []
			},
			isLoading: true
		}

		this.handleBoxChange = this.handleBoxChange.bind(this);
		this.fakeApiRequest = this.fakeApiRequest.bind(this);
	}

	componentDidMount() {
		setTimeout(this.fakeApiRequest, 2000);
	}

	fakeApiRequest() {
		this.setState({
			isLoading: false
		})
	}

	handleBoxChange(e) {
		const { checked, name } = e.currentTarget;

		this.setState(prevState => {
			const currentSelectedGenres = prevState.filters.genres;

			let newSelectedGenres;

			if (checked) {
				newSelectedGenres = currentSelectedGenres.concat(name);
			} else {
				newSelectedGenres = currentSelectedGenres.filter(genre => genre !== name)
			}

			const newState = {
				filters: {
					...prevState.filters,
					genres: newSelectedGenres
				}
			}

			return newState;
		})
	}

	filterBooksByGenre() {
		const { books, filters } = this.state;
		const { genres } = filters;

		if (genres.length === 0) {
			return books;
		} else {
			const filteredBooks = books.filter(book => genres.includes(book.genre));
			return filteredBooks;
		}
	}

	render() {
		const { genres, filters, isLoading } = this.state;
		const filteredBooks = this.filterBooksByGenre();

		return (
			<div className="App">
				<Header />
				<Main
					books={filteredBooks}
					genres={genres}
					filters={filters}
					isLoading={isLoading}
					handleBoxChange={this.handleBoxChange}
				/>
			</div>
		);
	}
}

export default App;
