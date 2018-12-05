import React, { Component } from 'react';
import { CardView } from '../components/cards/Cards';

// This class represents the favorites page
class Favorites extends Component {
  render() {
    let objs = this.props.objs;
    /*
    objs = objs.filter((obj) => {
      return obj.isFavorite === true;
    });
    */
    return (
      <CardView title={this.props.title} subtitle={this.props.subtitle} objs={this.props.objs} handleFavorites={this.props.handleFavorites} favFlag={this.props.favFlag} />
    )
  }
}

export { Favorites };