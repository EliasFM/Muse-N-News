// TODO: Needs to be implemented. Needs to have more or less the same properties as the other cards for consistency. 
const MovieObject = (obj) => {
  return {
    id: obj.id,
    title: obj.title,
    releaseDate: obj.release_date,
    overview: obj.overview,
    poster: `https://image.tmdb.org/t/p/w500/${obj.poster_path}`,
    voteAverage: obj.vote_average
  }
};

export { MovieObject };