import React, { Component } from 'react';
import { CardList } from '../views/CardView';

class Favorites extends Component {
  render() {
    let objs = this.props.objs;
    objs = objs.filter((obj) => {
      return obj.isFavorite === true;
    });
    return (
      <div>
        <h2 className="content-title">Favorites</h2>
        <CardList objs={this.props.objs} handleFavorites={this.props.handleFavorites} />
      </div>
    )
  }
}

export { Favorites };