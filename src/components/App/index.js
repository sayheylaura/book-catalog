import React, { Component } from 'react';
import './App.scss';
import { books } from '../../data/bookData';
import Header from '../Header';
import Main from '../Main';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: books
		}
	}

	render() {
		const { books } = this.state;
		return (
			<div className="App">
				<Header />
				<Main books={books} />
			</div>
		);
	}
}

export default App;
