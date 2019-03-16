import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItem from '../BookItem';

class BookList extends Component {
	render() {
		const { filteredBooks } = this.props;
		return (
			<section className="app__books">
				<ul className="books__list">
					{filteredBooks.map((book, ind) => {
						return (
							<li key={ind} className="books__item">
								<BookItem
									books={filteredBooks}
									book={book}
									ind={ind}
								/>
							</li>
						);
					})}
				</ul>
			</section>
		);
	}
}

BookList.propTypes = {
	filteredBooks: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired
}

export default BookList;
