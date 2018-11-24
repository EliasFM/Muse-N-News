const SongObject = (obj) => {
  return {
    id: obj.trackId,
    album: obj.collectionName,
    artistName: obj.artistName,
    artistUrl: obj.artistPreviewUrl,
    country: obj.country,
    genre: obj.primaryGenreName,
    image: obj.artworkUrl100,
    mediaType: obj.kind,
    previewUrl: obj.previewUrl,
    releaseDate: obj.releaseDate.substring(0, 10),
    title: obj.trackName,
    url: obj.trackViewUrl,
    wrapperType: obj.wrapperType,
  }
};

export default SongObject;