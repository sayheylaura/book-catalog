import { defaultBooks } from './bookData';

let defaultGenres = [];

for (const book of defaultBooks) {
	const genres = book.genres;
	for (const genre of genres) {
		if (!(defaultGenres.indexOf(genre) > -1)) {
			defaultGenres.push(genre);
		}
	}
}

defaultGenres.sort();

export { defaultGenres };
