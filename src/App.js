import React, { Component } from 'react';
import { HeaderY } from './components/headers/Headers';
import { FixedNavBar } from './components/navbars/Navbars';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FixedNavBar />
        <HeaderY title='Looking for entertainment?' subtitle='Find music, movies, books, and more of your favorite genre.' />
      </div>
    )
  }
}

export default App;
