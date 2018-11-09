'use strict';

class Header {

  constructor(title, subtitle) {
    this.title = title;
    this.subtitle = subtitle;
  }

  render() {
    let $headerDiv = $(`<div id="header" class="jumbotron jumbotron fluid">`);
    let $containerDiv = $(`<div class="container">`);
    let $title = $(`<h1 id="title" class="display-3 title">${this.title}</h1>`);
    let $subtitle = $(`<p id="subtitle" class="lead title">${this.subtitle}</p>`);

    $headerDiv.append($containerDiv);
    $containerDiv.append($title);
    $containerDiv.append($subtitle);

    return $headerDiv;
  }
}

class Content {

  constructor(title) {
    this.title = title;
  }

  render() {
    let $divContainer = $(`<div class="container">`);
    let $content = $(`<div id="content">`);
    let $title = $(`<h2 class="content-title">${this.title}</h2>`);

    $divContainer.append($content);
    $divContainer.append($title);

    return $divContainer;
  }
}

class Card {

  consutrctor(iTunesObject) {
    this.iTunesObject = iTunesObject;
  }

  handleMissingError(obj) {
    return obj == undefined ? 'Not available' : obj;
  }

  render() {
    let $card = $(`
    <div class="col-md-6 col-xs-3 d-flex">
      <div class="card mb-4">
        <div class="card-body">
          <div class="col-sm-auto">
            <img class="pb-3" src="${handleMissingError(this.iTunesObject.artworkUrl100)}" alt="${handleMissingError(this.iTunesObject.trackName)}">
          </div>
          <div class="col-sm">
            <h3 class="card-title">
              <a href=${handleMissingError(this.iTunesObject.trackViewUrl)} target="_blank"> ${handleMissingError(this.iTunesObject.trackName)} </a>
            </h3>
            <p class="card-text">Type: ${handleMissingError(this.iTunesObject.kind)}</p>
            <p class="card-text">Genre: ${handleMissingError(this.iTunesObject.primaryGenreName)}</p>
            <p class="card-text">
              <cite>
                ${handleMissingError(this.iTunesObject.artistName)}, ${handleMissingError(this.iTunesObject.releaseDate).substring(0, 10)}, ${handleMissingError(this.iTunesObject.country)}
              </cite>
            </p>
            <p class="card-text">Description: ${handleMissingError(this.iTunesObject.longDescription)}</p>
          </div>
        </div>
      </div>
    </div>
    `);
    return $card;
  }
}

class Service {

  constructor(entity, searchQuery) {
    this.entity = entity;
    this.searchQuery = searchQuery;
  }

  
}