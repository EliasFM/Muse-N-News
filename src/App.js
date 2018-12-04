// Modules
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import _ from 'lodash';
import firebase from 'firebase/app';

// User-defined files
import { FixedNavBar } from './components/navbars/Navbars';
import { CardView } from './components/cards/Cards';
import { Favorites } from './views/Favorites';
import './App.css';
import { Home } from './views/Home';
import { Movies } from './views/Movies';
import SignUpView from './views/SignUpView';

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

  // When the component mounts, check if the user is logged in
  componentDidMount() {
    this.authUnregFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.setState({
          user: firebaseUser,
          loading: false
        });
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
          console.log(err);
        }).then(() => {
          this.setState({ isLoading: false });
        });
      } else {
        this.setState({
          user: null,
          loading: false
        });
      }
    });
  }

  // Unregister the auth listener when component unmounts
  componentWillUnmount() {
    this.authUnregFunc();
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
          return obj.trackId === entityId || obj.collectionId === entityId || obj.id === entityId;
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

  // Tells the state which tab we're currently in
  handleTab = (tab) => {
    this.setState({ currentTab: tab });
  }

  // Handles the sign-up for Firebase
  handleSignUp = (email, password, passwordRepeat, username) => {
    this.setState({ errorMessage: null });
    if (password !== passwordRepeat) {
      this.setState({ errorMessage: 'passwords do not match' });
      return;
    }
    this.setState({ isLoading: true });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        return userCredentials.user;
      })
      .then((user) => {
        user.updateProfile({
          displayName: username
        }).then(() => {
          this.setState({
            displayName: username,
            isLoading: false
          });
        }).catch((err) => {
          this.setState({ errorMessage: err.message });
        })
      }).catch((err) => {
        this.setState({ errorMessage: err.message })
      });
  }

  // Handles the sign-in for Firebase
  handleSignIn = (email, password) => {
    this.setState({ errorMessage: null, isLoading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      })
  }

  // Handles the sign-out for Firebase
  handleSignOut = () => {
    this.setState({ errorMessage: null });
    firebase.auth().signOut()
      .catch((err) => {
        this.setState({ error: err.message });
      })
  }

  render() {
    // TODO: Fix the logic for showing the loader if user is logged in
    /*
    if (this.state.loading) {
      return (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
        </div>
      );
    }
    */

    // Check if user is logged in. If not, show them the sign up form
    if (!this.state.user) {
      return <SignUpView handleSignUp={this.handleSignUp} handleSignIn={this.handleSignIn} errorMessage={this.state.errorMessage} isLoading={this.state.isLoading} />
    }

    // Views for routes that need to be passed data
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

    // TODO: Within FixedNavBar, show the current user, and when clicked, show a dropdown that lets them sign out!
    return (
      <div>
        <FixedNavBar searchCallback={this.search} handleTab={this.handleTab} isLoading={this.state.isLoading} currentTab={this.state.currentTab} currentUser={this.state.user} handleSignOut={this.handleSignOut} />
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
