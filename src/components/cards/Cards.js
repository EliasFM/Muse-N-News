import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { SongObject } from '../../models/SongObject';
import { AudioBookObject } from '../../models/AudioBookObject';
import { MovieObject } from '../../models/MovieObject';
import { ContentCard } from './ContentCards';
import { Header } from '../headers/Headers';

// CardView shows a list of cards within some container divs
class CardView extends Component {

  // If the given objects are empty and if the search callback is defined, let the default search be 'pop'.
  componentDidMount() {
    if (this.props.objs.length === 0 && this.props.searchCallback !== undefined && this.props.option !== 'movie') {
      this.props.searchCallback(this.props.option, 'pop');
    }
  }

  render() {
    let alert;
    if (this.props.showAlert) {
      alert = (
        <div id="alert-message">
          <Alert id="inner-message" color='success'>
            Added to favorites!
          </Alert>
        </div>
      )
    }
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div id='main-content'>
          <div id='content'>
            {alert}
            <CardList objs={this.props.objs} handleFavorites={this.props.handleFavorites} favFlag={this.props.favFlag} />
          </div>
        </div>
      </div>
    )
  }
}

// Shows a list of <ContentCard>
class CardList extends Component {

  render() {
    let objs = this.props.objs;
    // Splits each object into their own card data, because the data is inherently different.
    objs = objs.map((obj) => {
      let entity = obj;
      if (!this.props.favFlag) {
        if (obj.wrapperType === 'track') {
          entity = SongObject(obj);
        } else if (obj.wrapperType === 'audiobook') {
          entity = AudioBookObject(obj);
        } else {
          entity = MovieObject(obj);
        }
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