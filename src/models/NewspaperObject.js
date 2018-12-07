const NewspaperObject = (obj) => {
  return {
    id: obj.title,
    title: obj.title,
    mediaType: 'news',
    source: obj.source,
    author: obj.author,
    descrip: obj.description,
    url: obj.url,
    urlToImage: obj.urlToImage,
    datePublished: obj.publishedAt,
    content: obj.content,
    isFavorite: obj.isFavorite,
  }
};

export { NewspaperObject };