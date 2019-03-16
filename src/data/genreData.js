import { books } from './bookData';

let allGenres = [];

for (const book of books) {
	const genres = book.genres;
	for (const genre of genres) {
		if (!allGenres.includes(genre)) {
			allGenres.push(genre);
		}
	}
}

export { allGenres };
