import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { book } from '../../services/propTypes';

class BookItem extends Component {
	render() {
		const { filteredBooks, book } = this.props;

		const {
			id,
			title,
			price,
			genres
		} = book;

		return (
			<article className="book">
				<h2 className="book__description">{`Book ${id} of ${filteredBooks.length}`}</h2>
				<div className="book__title">Title: {title}</div>
				<div className="book__price">Price: ${price}</div>
				<div className="book__genres-wrapper">
					<div className="genres__title">Genres:</div>
					<ul className="genres__list">
						{genres.map((genre, ind) => (
							<li key={ind} className="genres__item">
								{genre}
							</li>
						))}
					</ul>
				</div>
			</article>
		);
	}
}

BookItem.propTypes = {
	filteredBooks: PropTypes.arrayOf(
		PropTypes.shape(book).isRequired
	).isRequired,
	book: PropTypes.shape(book).isRequired
}

export default BookItem;
