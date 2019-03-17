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
			allGenres: allGenres,
			filters: {
				genres: []
			},
			isLoading: true
		}

		this.fakeApiRequest = this.fakeApiRequest.bind(this);
		this.handleBoxChange = this.handleBoxChange.bind(this);
		this.handleBookUpdate = this.handleBookUpdate.bind(this);
		this.handleAddBook = this.handleAddBook.bind(this);
		this.handleRemoveBook = this.handleRemoveBook.bind(this);
		this.handleAddGenre = this.handleAddGenre.bind(this);
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
		const { genres: selectedGenres } = filters;

		if (selectedGenres.length === 0) {
			return books;
		} else {
			let filteredBooks = [];

			for (const book of books) {
				const genres = book.genres;
				for (const genre of genres) {
					if ((selectedGenres.includes(genre)) && (!filteredBooks.includes(book))) {
						filteredBooks.push(book);
					}
				}
			}

			return filteredBooks;
		}
	}

	handleBookUpdate(ind, value, name) {
		this.setState(prevState => {
			const newState = {
				books: prevState.books.map((item, index) => {
					if (index === ind) {
						if (name === "price" && value) {
							item = {
								...item,
								[name]: parseFloat(value)
							}
						} else {
							item = {
								...item,
								[name]: value
							};
						}
					}
					return item;
				})
			};
			return newState;
		});
	}

	handleAddBook() {
		const newBook = {
			title: "",
			price: "",
			genres: []
		}

		this.setState(prevState => {
			const newState = {
				books: prevState.books.concat(newBook)
			};
			return newState;
		})
	}

	handleRemoveBook(ind) {
		this.setState(prevState => {
			const newState = {
				books: prevState.books.filter((item, index) => {
					return index !== ind;
				})
			};
			return newState;
		})
	}

	handleAddGenre() {
		console.log('add genre');
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
					handleBoxChange={this.handleBoxChange}
					handleBookUpdate={this.handleBookUpdate}
					handleAddBook={this.handleAddBook}
					handleRemoveBook={this.handleRemoveBook}
					handleAddGenre={this.handleAddGenre}
				/>
			</div>
		);
	}
}

export default App;
