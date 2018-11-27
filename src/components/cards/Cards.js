import React, { Component } from 'react';
import { SongObject } from '../../models/SongObject';
import { AudioBookObject } from '../../models/AudioBookObject';
import { MovieObject } from '../../models/MovieObject';
import { ContentCard } from './ContentCards';
import { Header } from '../headers/Headers';

class CardView extends Component {
  constructor(props) {
    super(props);
  }

  // If the given objects are empty and if the search callback is defined, let the default search be 'pop'.
  componentDidMount() {
    console.log('mounted');
    console.log(`option: ${this.props.option}`);
    if (this.props.objs.length === 0 && this.props.searchCallback !== undefined && this.props.option !== 'movie') {
      this.props.searchCallback(this.props.option, 'pop');
    }
  }

  render() {
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div id='main-content'>
          <div id='content'>
            <CardList objs={this.props.objs} handleFavorites={this.props.handleFavorites} />
          </div>
        </div>
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
      return <ContentCard key={entity.id} obj={entity} handleFavorites={this.props.handleFavorites} />
    });
    return (
      <div className='row'>
        {objs}
      </div>
    )
  }
}

export { CardView, CardList };