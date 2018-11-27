// TODO: Needs to be implemented. Needs to have more or less the same properties as the other cards for consistency. 
//import { genres } from '../components/genre/genre-ids';

var genres = [
  {
      "id": 28,
      "name": "Action"
  },
  {
      "id": 12,
      "name": "Adventure"
  },
  {
      "id": 16,
      "name": "Animation"
  },
  {
      "id": 35,
      "name": "Comedy"
  },
  {
      "id": 80,
      "name": "Crime"
  },
  {
      "id": 99,
      "name": "Documentary"
  },
  {
      "id": 18,
      "name": "Drama"
  },
  {
      "id": 10751,
      "name": "Family"
  },
  {
      "id": 14,
      "name": "Fantasy"
  },
  {
      "id": 36,
      "name": "History"
  },
  {
      "id": 27,
      "name": "Horror"
  },
  {
      "id": 10402,
      "name": "Music"
  },
  {
      "id": 9648,
      "name": "Mystery"
  },
  {
      "id": 10749,
      "name": "Romance"
  },
  {
      "id": 878,
      "name": "Science Fiction"
  },
  {
      "id": 10770,
      "name": "TV Movie"
  },
  {
      "id": 53,
      "name": "Thriller"
  },
  {
      "id": 10752,
      "name": "War"
  },
  {
      "id": 37,
      "name": "Western"
  }
];


const MovieObject = (obj) => {
  let genreIDs = obj.genre_ids;
  let results = [];
  for (let i = 0; i < genreIDs.length; i++) {
    results[i] = genres.filter(function(genre){ return genre.id === genreIDs[i] })[0].name;
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
    genre: results,
    isFavorite: obj.isFavorite
  }
};

export { MovieObject };