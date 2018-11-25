import React, { Component } from 'react';
import { SongObject } from '../models/SongObject';
import { AudioBookObject } from '../models/AudioBookObject';
import { MovieObject } from '../models/MovieObject';
import { ContentCard } from '../components/cards/ContentCards';

class CardView extends Component {
  render() {
    return (
      <div>
        <h2 className="content-title">Today's Featured Choices</h2>
        <CardList objs={this.props.objs} />
      </div>
    )
  }
}

class CardList extends Component {
  render() {
    let objs = this.props.objs;
    objs = objs.map((obj) => {
      let entity;
      if (obj.wrapperType === 'track') {
        entity = SongObject(obj);
      } else if (obj.wrapperType === 'audiobook') { // TODO: Add another check for movies
        entity = AudioBookObject(obj);
      } else {
        entity = MovieObject(obj);
      }
      return <ContentCard key={entity.id} obj={entity} />
    });
    return (
      <div className='row'>
        {objs}
      </div>
    )
  }
}

export { CardView };