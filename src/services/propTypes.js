import PropTypes from 'prop-types';

const book = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	genres: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired
};

const mainPropTypes = {
	books: PropTypes.arrayOf(
		PropTypes.shape(book).isRequired
	).isRequired,
	filteredBooks: PropTypes.arrayOf(
		PropTypes.shape(book).isRequired
	).isRequired,
	allGenres: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	filters: PropTypes.objectOf(
		PropTypes.arrayOf(
			PropTypes.string.isRequired
		).isRequired
	).isRequired,
	isLoading: PropTypes.bool.isRequired,
	updateGenres: PropTypes.func.isRequired,
	handleBoxChange: PropTypes.func.isRequired,
	handleBookUpdate: PropTypes.func.isRequired,
	handleAddBook: PropTypes.func.isRequired,
	handleRemoveBook: PropTypes.func.isRequired,
	handleGenreUpdate: PropTypes.func.isRequired,
	handleAddGenre: PropTypes.func.isRequired,
	handleRemoveGenre: PropTypes.func.isRequired
}

export { book, mainPropTypes };
