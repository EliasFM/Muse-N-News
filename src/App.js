// Modules
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import _ from 'lodash';

// User-defined files
import { HeaderY } from './components/headers/Headers';
import { FixedNavBar } from './components/navbars/Navbars';
import { CardView } from './views/CardView';
import { Favorites } from './views/Favorites';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
    this.state = {
      currentCards: [],
      favoriteCards: [],
    };
  }

  componentDidMount() {
    // On initial load
    if (this.state.currentCards.length === 0) {
      this.search('song', 'pop');
    }
  }

  search = (option, term) => {
    if (term === '') {
      // show a modal with an error message
    }
    let url = `https://itunes.apple.com/search?entity=${option}&term=${term}&limit=25`;
    this.setState({ isLoading: true });
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({ currentCards: data.results });
    }).catch((err) => {
      console.log(`Error: ${err}`);
    }).then(() => {
      this.setState({ isLoading: false });
    });
  }

  handleFavorites = (entityId) => {
    let entity = _.find(this.state.currentCards, (obj) => {
      return obj.trackId === entityId || obj.collectionId === entityId;
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

  render() {
    let defaultContent = (routerProps) => {
      return <CardView {...routerProps} objs={this.state.currentCards} handleFavorites={this.handleFavorites} />
    }
    let favoritesContent = (routerProps) => {
      return <Favorites {...routerProps} objs={this.state.favoriteCards} handleFavorites={this.handleFavorites} />
    }
    return (
      <div>
        <FixedNavBar searchCallback={this.search} isLoading={this.state.isLoading} />
        <HeaderY title='Looking for entertainment?' subtitle='Find music, movies, books, and more of your favorite genre.' />
        <div id='main-content'>
          <div className='container'>
            <div id='content'>
              <Switch>
                <Route exact path='/' render={defaultContent} />
                <Route path='/favorites' render={favoritesContent} />
                <Redirect to='/' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
