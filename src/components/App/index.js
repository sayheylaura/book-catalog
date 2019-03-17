import React, { Component } from 'react';
import { defaultBooks } from '../../data/bookData';
import { defaultGenres } from '../../data/genreData';
import './App.scss';
import Header from '../Header';
import Main from '../Main';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: defaultBooks,
			allGenres: defaultGenres,
			filters: {
				genres: []
			},
			isLoading: true
		}

		this.fakeApiRequest = this.fakeApiRequest.bind(this);
		this.updateGenres = this.updateGenres.bind(this);
		this.handleBoxChange = this.handleBoxChange.bind(this);
		this.handleBookUpdate = this.handleBookUpdate.bind(this);
		this.handleAddBook = this.handleAddBook.bind(this);
		this.handleRemoveBook = this.handleRemoveBook.bind(this);
		this.handleGenreUpdate = this.handleGenreUpdate.bind(this);
		this.handleAddGenre = this.handleAddGenre.bind(this);
		this.handleRemoveGenre = this.handleRemoveGenre.bind(this);
	}

	componentDidMount() {
		setTimeout(this.fakeApiRequest, 2000);
	}

	fakeApiRequest() {
		this.setState({
			isLoading: false
		})
	}

	updateGenres() {
		const { books } = this.state;
		let newGenres = [];

		for (const book of books) {
			const genres = book.genres;
			for (const genre of genres) {
				if (!newGenres.includes(genre)) {
					newGenres.push(genre);
				}
			}
		}

		newGenres.sort();

		this.setState({
			allGenres: newGenres
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
		const { genres: selectedGenres } = filters;
		let filteredBooks = [];

		if (selectedGenres.length === 0) {
			filteredBooks = books;
		} else {
			for (const book of books) {
				const genres = book.genres;
				for (const genre of genres) {
					if ((selectedGenres.includes(genre)) && (!filteredBooks.includes(book))) {
						filteredBooks.push(book);
					}
				}
			}
		}

		return filteredBooks;
	}

	handleBookUpdate(bookInd, value, name) {
		this.setState(prevState => {
			const newState = {
				books: prevState.books.map((book, ind) => {
					if (ind === bookInd) {
						if (name === "price" && value) {
							book = {
								...book,
								[name]: parseFloat(value)
							}
						} else {
							book = {
								...book,
								[name]: value
							}
						}
					}
					return book;
				})
			}
			return newState;
		})
	}

	handleAddBook(arr) {
		const newBook = {
			id: arr.length + 1,
			title: "",
			price: "",
			genres: []
		}

		this.setState(prevState => {
			const newState = {
				books: prevState.books.concat(newBook)
			}
			return newState;
		})
	}

	handleRemoveBook(bookInd) {
		this.setState(prevState => {
			const newState = {
				books: prevState.books.filter((book, ind) => {
					return ind !== bookInd;
				})
			}
			return newState;
		})
	}

	handleGenreUpdate(bookInd, genreInd, value) {
		this.setState(prevState => {
			const newState = {
				books: prevState.books.map((book, ind) => {
					if (ind !== bookInd) {
						return book;
					} else {
						book = {
							...book,
							genres: book.genres.map((genre, ind) => {
								if (ind === genreInd) {
									genre = value
								}
								return genre;
							})
						}
						return book;
					}
				})
			}
			return newState;
		})
	}

	handleAddGenre(bookInd) {
		const newItem = "";

		this.setState(prevState => {
			const newState = {
				books: prevState.books.map((book, ind) => {
					if (ind !== bookInd) {
						return book;
					} else {
						book = {
							...book,
							genres: book.genres.concat(newItem)
						}
						return book;
					}
				})
			}
			return newState;
		})
	}

	handleRemoveGenre(bookInd, genreInd) {
		this.setState(prevState => {
			const newState = {
				books: prevState.books.map((book, ind) => {
					if (ind !== bookInd) {
						return book;
					} else {
						book = {
							...book,
							genres: book.genres.filter((genre, ind) => {
								return ind !== genreInd;
							})
						}
						return book;
					}
				})
			}
			return newState;
		})
	}

	render() {
		const {
			books,
			allGenres,
			filters,
			isLoading
		} = this.state;

		const filteredBooks = this.filterBooksByGenre();

		return (
			<div className="App">
				<Header />
				<Main
					books={books}
					filteredBooks={filteredBooks}
					allGenres={allGenres}
					filters={filters}
					isLoading={isLoading}
					updateGenres={this.updateGenres}
					handleBoxChange={this.handleBoxChange}
					handleBookUpdate={this.handleBookUpdate}
					handleAddBook={this.handleAddBook}
					handleRemoveBook={this.handleRemoveBook}
					handleGenreUpdate={this.handleGenreUpdate}
					handleAddGenre={this.handleAddGenre}
					handleRemoveGenre={this.handleRemoveGenre}
				/>
			</div>
		);
	}
}

export default App;
