'use strict';

// Handles the header
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

// Handles the content
class Content {

  constructor(title) {
    this.title = title;
  }
  render() {
    let $mainContent = $(`<div id="main-content">`);
    let $divContainer = $(`<div class="container">`);
    let $content = $(`<div id="content">`);
    let $title = $(`<h2 class="content-title">${this.title}</h2>`);
    let $row = $(`<div class="row">`);

    $mainContent.append($divContainer);
    $divContainer.append($content);
    $content.append($title);
    $content.append($row);

    return $mainContent;
  }
}

// Renders cards from json
class Card {

  constructor(iTunesObject) {
    this.iTunesObject = iTunesObject;
  }

  handleMissingError(obj) {
    return obj == undefined ? 'Not available' : obj;
  }

  resolveType(obj) {
    if (obj.wrapperType == 'audiobook') {
      return obj.wrapperType;
    } else {
      return obj.kind;
    }
  }

  resolveName(obj) {
    if (obj.wrapperType == 'audiobook') {
      return obj.collectionName;
    } else {
      return obj.trackName;
    }
  }

  resolveUrl(obj) {
    if (obj.wrapperType == 'audiobook') {
      return obj.collectionViewUrl;
    } else {
      return obj.trackViewUrl;
    }
  }

  render() {

    let $card = $(
      `<div class="col-md-6 col-xs-3 d-flex">
      <div class="card mb-4">
        <div class="card-body">
          <div class="col-sm-auto">
            <img class="pb-3" src="${this.handleMissingError(this.iTunesObject.artworkUrl100)}" alt="${this.resolveName(this.iTunesObject)}">
          </div>
          <div class="col-sm">
            <h3 class="card-title">
              <a href="${this.resolveUrl(this.iTunesObject)}" target="_blank"> ${this.resolveName(this.iTunesObject)} </a>
            </h3>
            <p class="card-text">Type: ${this.resolveType(this.iTunesObject)}</p>
            <p class="card-text">Genre: ${this.handleMissingError(this.iTunesObject.primaryGenreName)}</p>
            <p class="card-text">
              <cite>
                ${this.handleMissingError(this.iTunesObject.artistName)}, ${this.handleMissingError(this.iTunesObject.releaseDate).substring(0, 10)}, ${this.handleMissingError(this.iTunesObject.country)}
              </cite>
            </p>
            <p class="card-text">Description: ${this.handleMissingError(this.iTunesObject.longDescription)}</p>
          </div>
        </div>
      </div>
    </div>`);

    return $card;
  }
}

// Populates the content with cards
class CardList {
  constructor(cardObjects) {
    this.cardObjects = cardObjects;
  }

  render() {
    let $row = $('div.row');
    $row.html('');
    this.cardObjects.forEach((cardObject) => {
      let card = new Card(cardObject.card).render();

      let $button = $(`<div class="btn btn-success favorite">Add to favorites!</div>`);
      $button.attr('id', cardObject.id);
      $button.on('click', event => this.toggleFavorites(event)).bind(this);

      this.toggleButtonState(cardObject.faved, $button);

      card.find('.col-sm').append($button);
      $row.append(card);
    });
    let subCard = $('.card.mb-4');
    subCard.css('width', subCard.parent().width());
  }

  toggleFavorites(event) {
    let button = $(event.currentTarget);
    // Remove from favorites
    let isFaved = button.hasClass('favorites-true');
    let id = button.attr('id');
    if (isFaved) {
      state.favorites = state.favorites.filter((cardObj) => {
        return cardObj.id != id;
      });
      let card = state.featured.find((c) => {
        return c.id == id;
      });
      let index = state.featured.indexOf(card);

      // Check if media is still there
      if (state.featured[index] !== undefined) {
        state.featured[index].faved = false;
      }
      this.toggleButtonState(false, button);
      if ($('li.active').children('a').text() == 'Favorites') {
        new CardList(state.favorites).render();
      } else {
        this.render();
      }

    } else {
      let card = state.featured.find((c) => {
        return c.id == id;
      });
      let favObj = {
        card: card.card,
        id: id,
        faved: true,
        type: 'fav'
      };
      let index = state.featured.indexOf(card);
      state.featured[index].faved = true;
      state.favorites.push(favObj);

      this.toggleButtonState(true, button);
      this.render();
    }
  }

  toggleButtonState(faved, button) {
    if (faved) {
      button.text('Remove from favorites');
      button.removeClass('btn-success');
      button.addClass('favorites-true');
      button.addClass('btn-danger');
    } else {
      button.text('Add to favorites');
      button.removeClass('btn-danger');
      button.removeClass('favorites-true');
      button.addClass('btn-success');
    }
  }
}

// Makes HTTP requests to iTunes
class Service {

  getResults(entity, searchTerm, limit = 25) {
    let url = `https://itunes.apple.com/search?entity=${entity}&term=${searchTerm}&limit=${limit}`;

    this.togglerSpinner();
    return fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      // clear the objects in featured
      state.featured = [];
      data.results.forEach((res) => {
        let obj = {
          card: res,
          id: state.counter + 1,
          faved: false,
        };
        state.counter++;
        state.featured.push(obj);
      });

      // render the featured cards
      new CardList(state.featured).render();
    }).catch((err) => {
      console.log(err);
      new Modal(1, 'Error', err, null).render();
    }).then(this.togglerSpinner);
  }

  togglerSpinner() {
    $('.fa-spinner').toggleClass('d-none');

    // Disables button during search
    let $button = $('#search-button');
    $button.toggleClass('disabled');
    if ($button.hasClass('disabled')) {
      $button.prop('disabled', true);
    } else {
      $button.prop('disabled', false);
    }
  }
}

// Modal handles popups in an elegant way to alert users of errors
class Modal {
  constructor(id, title, body, callback) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.callback = callback;
  }

  render() {
    // Only create if it doesnt exist
    if ($(`#${this.id}`).length === 0) {
      let $modalContainer = $('.modalContainer');

      // Create
      let $modalType = $('<div>');
      let $modalDialog = $('<div>');
      let $modalContent = $('<div>');
      let $modalHeader = $('<div>');
      let $modalBody = $('<div>');
      let $modalFooter = $('<div>');

      let $modalHeaderButton = $('<button>');
      let $modalFooterButton = $('<button>');

      let $modalHeaderTitle = $('<h4>');

      let $modalBodyParagraph = $('<p>');

      // Change
      $modalType.prop({
        class: 'modal fade',
        id: this.id,
        role: 'dialog'
      });
      $modalDialog.addClass('modal-dialog');
      $modalContent.addClass('modal-content');
      $modalHeader.addClass('modal-header');
      $modalBody.addClass('modal-body');
      $modalFooter.addClass('modal-footer');

      $modalHeaderButton.prop({
        type: 'button',
        class: 'close',
      });
      $modalHeaderButton.data('dismiss', 'modal');
      $modalHeaderButton.html('&times;');
      $modalHeaderButton.on('click', () => {
        this.closeModal();
      });

      $modalFooterButton.prop({
        type: 'button',
        class: 'btn btn-danger',
      });
      $modalFooterButton.data('dismiss', 'modal');
      $modalFooterButton.html('Close');
      $modalFooterButton.on('click', () => {
        this.closeModal();
      });

      $modalHeaderTitle.addClass('modal-title');
      $modalHeaderTitle.html(this.title);

      $modalBodyParagraph.html(this.body);

      // Append
      $modalHeader.append($modalHeaderTitle);
      $modalHeader.append($modalHeaderButton);

      $modalBody.append($modalBodyParagraph);

      $modalFooter.append($modalFooterButton);

      $modalContent.append($modalHeader);
      $modalContent.append($modalBody);
      $modalContent.append($modalFooter);

      $modalDialog.append($modalContent);

      $modalType.append($modalDialog);

      $modalContainer.append($modalType);
      $('#app').append($modalContainer);
    }
    $(`#${this.id}`).modal();
  }

  closeModal() {
    var $currentModal = $(`#${this.id}`);
    $currentModal.modal('hide');
    if (this.callback) {
      this.callback();
    }
  }
}

// Main app for the web app
class App {

  constructor(parentElement, title, subtitle, contentTitle) {
    this.parentElement = parentElement;
    this.title = title;
    this.subtitle = subtitle;
    this.contentTitle = contentTitle;
  }

  render() {
    this.parentElement.html('');

    let header = new Header(this.title, this.subtitle).render();
    let content = new Content(this.contentTitle);
    let mainContent = content.render();

    this.parentElement.append(header);
    this.parentElement.append(mainContent);
    this.parentElement.append($(`<div class="modalContainer">`));
  }
}

const state = {
  favorites: [],
  featured: [],
  counter: 0
}

let app = new App($('#app'), 'Looking for entertainment?', 'Find music, movies, books, and more of your favorite genre.', 'Featured');
app.render();

let favorites = new App($('#app'), 'Looking for entertainment?', 'Here are your favorites.', 'Favorites');

// Initialize with this call
let service = new Service();
service.getResults('song', 'pop', 40);

let $searchButton = $('#search-button');
let $input = $('#search-input');

$searchButton.on('click', (event) => {
  event.preventDefault();
  if ($input.val().length == 0) {
    new Modal(1, 'Error', 'Input cannot be empty', () => {
      $input.val('');
    }).render();
  } else {
    let entity = $('#entity-select').val();
    let query = $input.val();
    service.getResults(entity, query);
  }
});

$('li.nav-item').on('click', function () {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  let text = $(this).children('a').text();
  if (text == 'Favorites') {
    showFavorites();
  } else {
    showFeatured();
  }
});

function showFavorites() {
  favorites.render();
  new CardList(state.favorites).render();
}

function showFeatured() {
  app.render();
  new CardList(state.featured).render();
}
