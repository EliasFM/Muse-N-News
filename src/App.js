import React, { Component } from 'react';
import { HeaderY } from './components/headers/Headers';
import { FixedNavBar } from './components/navbars/Navbars';
import './App.css';
import { CardView } from './views/CardView';
import { Favorites } from './views/Favorites';
import { Redirect, Route, Switch } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCards: [],
      favoriteCards: [],
    };
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

  render() {
    let defaultContent = (routerProps) => {
      //this.search('song', 'taylor swift');
      return <CardView {...routerProps} objs={this.state.currentCards} />
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
                <Route path='/favorites' component={Favorites} />
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
