import React, { Component } from 'react';
import { HeaderY } from './components/headers/Headers';
import { FixedNavBar } from './components/navbars/Navbars';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCards: [],
      favoriteCards: [],
    };
  }

  search = (url) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      console.log(`The URL passed in is ${url}`);
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    return (
      <div>
        <FixedNavBar searchCallback={this.search} isLoading={this.state.isLoading} />
        <HeaderY title='Looking for entertainment?' subtitle='Find music, movies, books, and more of your favorite genre.' />
      </div>
    )
  }
}

export default App;
