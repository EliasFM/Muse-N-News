// This object represents a book
const AudioBookObject = (obj) => {
  return {
    id: obj.collectionId,
    artistName: obj.artistName,
    artistUrl: obj.artistViewUrl,
    country: obj.country,
    description: obj.description,
    genre: obj.primaryGenreName,
    image: obj.artworkUrl100,
    isFavorite: obj.isFavorite,
    mediaType: obj.wrapperType,
    previewUrl: obj.previewUrl,
    releaseDate: obj.releaseDate.substring(0, 10),
    title: obj.collectionName,
    url: obj.collectionViewUrl,
    wrapperType: obj.wrapperType,
  }
};

export { AudioBookObject };