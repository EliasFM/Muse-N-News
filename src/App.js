// Modules
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import _ from 'lodash';

// User-defined files
import { FixedNavBar } from './components/navbars/Navbars';
import { CardView } from './components/cards/Cards';
import { Favorites } from './views/Favorites';
import './App.css';
import { Home } from './views/Home';
import { Movies } from './views/Movies';

class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.state = {
      musicCards: [],
      movieCards: [],
      bookCards: [],
      favoriteCards: [],
      homeMovies: [],
      currentTab: 'home',
    };
  }

  componentDidMount() {
    // Make a call to get popular movies and populate the data required for the carousel
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=06281c636bf07bf7ba505c2c83932760&language=en-US&page=1";
    this.setState({ isLoading: true });
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({ homeMovies: data.results });
      if (this.state.movieCards.length === 0) {
        this.setState({ movieCards: data.results });
      }
    }).catch((err) => {
    }).then(() => {
      this.setState({ isLoading: false });
    });
  }

  // This handles searching and sets the right card states to re-render cards
  search = (option, term) => {
    if (term === '') {
      // TODO: (stage 4) show a modal with an error message
    }
    let url;
    //option = this.state.currentTab;
    if (option === 'song' || option === 'audiobook') {
      url = `https://itunes.apple.com/search?entity=${option}&term=${term}&limit=50`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=06281c636bf07bf7ba505c2c83932760&language=en-US&query=${term}&page=1&include_adult=true`; // TODO IMPLEMENT THE MOVIE API
    }
    this.setState({ isLoading: true });
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      if (option === 'song') {
        this.setState({ musicCards: data.results });
      } else if (option === 'audiobook') {
        this.setState({ bookCards: data.results });
      } else {
        this.setState({ movieCards: data.results }); // TODO: MOVIE DATA
      }
    }).catch((err) => {
      console.log(`Error: ${err}`);
    }).then(() => {
      this.setState({ isLoading: false });
    });
  }

  // This adds and removes from the favorites state, which renders the favorites cards
  handleFavorites = (entityId, entityType) => {
    let cards = this.state.musicCards;
    if (entityType === 'audiobook') {
      cards = this.state.bookCards;
    } else if (entityType === 'movie') {
      cards = this.state.movieCards;
    }
    let entity = _.find(cards, (obj) => {
      return obj.trackId === entityId || obj.collectionId === entityId || obj.id === entityId;
    });
    // Push favorites into the favorites state
    if (!entity.isFavorite) {
      entity.isFavorite = true;
      this.state.favoriteCards.push(entity);
    } else { // Remove from favorites
      entity.isFavorite = false;
      this.setState((currentState) => {
        _.remove(currentState.favoriteCards, (obj) => {
          return obj.trackId === entityId || obj.collectionId === entityId;
        });
        let state = {
          favoriteCards: currentState.favoriteCards
        };
        return state;
      });
    }
    this.setState((currentState) => {
      let state = {
        currentCards: currentState.currentCards
      };
      return state;
    });
  }

  handleTab = (tab) => {
    this.setState({ currentTab: tab });
  }

  render() {
    let homeView = (routerProps) => {
      return <Home {...routerProps} title={'Looking for entertainment?'} subtitle={'Find music, movies, books, and more of your favorite genre.'} objs={this.state.homeMovies} />
    }

    let musicView = (routerProps) => {
      return <CardView {...routerProps} title={'Music'} subtitle={'Find your favorite songs, artists, and bands.'} objs={this.state.musicCards} handleFavorites={this.handleFavorites} searchCallback={this.search} option={'song'} />
    }

    let moviesView = (routerProps) => {
      return <Movies {...routerProps} title={'Movies'} subtitle={'Find the movie you\'ve been looking for.'} objs={this.state.movieCards} handleFavorites={this.handleFavorites} searchCallback={this.search} option={'movie'} />
    }

    let booksView = (routerProps) => {
      return <CardView {...routerProps} title={'Books'} subtitle={'Listen to your favorite book series through audiobooks.'} objs={this.state.bookCards} handleFavorites={this.handleFavorites} searchCallback={this.search} option={'audiobook'} />
    }

    let favoritesView = (routerProps) => {
      return <Favorites {...routerProps} title={'Favorites'} subtitle={'Here are your favorites'} objs={this.state.favoriteCards} handleFavorites={this.handleFavorites} />
    }

    return (
      <div>
        <FixedNavBar searchCallback={this.search} handleTab={this.handleTab} isLoading={this.state.isLoading} currentTab={this.state.currentTab} />
        <Switch>
          <Route exact path='/' render={homeView} />
          <Route path='/music' render={musicView} />
          <Route path='/movies' render={moviesView} />
          <Route path='/books' render={booksView} />
          <Route path='/favorites' render={favoritesView} />
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}

export default App;
