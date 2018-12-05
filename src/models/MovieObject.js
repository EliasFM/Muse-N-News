// This object represents a movie
import { genres } from '../genre/genre-ids';

const MovieObject = (obj) => {
  let genreIDs = obj.genre_ids;
  let results = [];
  for (let i = 0; i < genreIDs.length; i++) {
    results[i] = genres.filter(function (genre) { return genre.id === genreIDs[i] })[0].name;
  }

  let path;
  if (obj.poster_path === null) {
    path = 'img/no-poster.jpg';
  } else {
    path = `https://image.tmdb.org/t/p/w500/${obj.poster_path}`;
  }

  return {
    id: obj.id,
    title: obj.title,
    mediaType: 'movie',
    releaseDate: obj.release_date,
    overview: obj.overview,
    poster: path,
    src: path,
    voteAverage: obj.vote_average,
    genre: results.join(', '),
    isFavorite: obj.isFavorite,
  }
};

export { MovieObject };