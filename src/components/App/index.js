import React, { Component } from 'react';
import './App.scss';
import { books } from '../../data/bookData';
import Header from '../Header';
import Main from '../Main';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: books,
			genres: [
				'fantasy',
				'science'
			],
			filters: {
				genres: []
			}
		}

		this.handleBoxChange = this.handleBoxChange.bind(this);
	}

	handleBoxChange() {
		console.log('hello');
	}

	render() {
		const { books, genres, filters } = this.state;
		return (
			<div className="App">
				<Header />
				<Main
					books={books}
					genres={genres}
					filters={filters}
					handleBoxChange={this.handleBoxChange}
				/>
			</div>
		);
	}
}

export default App;
