import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookItem extends Component {
	render() {
		const {
			books,
			book,
			ind
		} = this.props;

		const {
			title,
			price,
			genres
		} = book;

		return (
			<article className="book">
				<h2 className="book__description">{`Book ${ind + 1} of ${books.length}`}</h2>
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
	books: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired,
	book: PropTypes.object.isRequired,
	ind: PropTypes.number.isRequired
}

export default BookItem;
