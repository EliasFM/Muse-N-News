// TODO: Needs to be implemented. Needs to have more or less the same properties as the other cards for consistency. 
//import { genres } from '../components/genre/genre-id';
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
]

const MovieObject = (obj) => {
  let genreIDs = obj.genre_ids;
  let tempResults = [];
  let results = [];
  for(let i = 0; i < genreIDs.length; i++) {
    tempResults[i] = genres.filter(function (entry) { return entry.id === genreIDs[i]; });
  }
  for(let i = 0; i < tempResults.length; i++) {
    results[i] = Object.values(tempResults[i])[1];
  }
  
  return {
    id: obj.id,
    title: obj.title,
    mediaType: 'movie',
    releaseDate: obj.release_date,
    overview: obj.overview,
    poster: `https://image.tmdb.org/t/p/w500/${obj.poster_path}`,
    voteAverage: obj.vote_average,
    genre: results,
    isFavorite: obj.isFavorite
  }
};

export { MovieObject };