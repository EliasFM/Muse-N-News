import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

// Each card renders differently based on their media type because of their different data
class ContentCard extends Component {
  constructor(props) {
    super(props);
    this.handleFavorites = this.handleFavorites.bind(this);
  }

  // Each card has a favorites button
  handleFavorites = () => {
    this.props.handleFavorites(this.props.obj.id, this.props.obj.mediaType);
  }

  render() {
    let obj = this.props.obj;
    let card;
    let newsButton = <Button color='btn'>See Related News</Button>
    // If a card has been favorited, change its button view
    let button = <Button color='btn btn-success' onClick={this.handleFavorites}>Add to favorites</Button>;
    if (obj.isFavorite) {
      button = <Button color='btn btn-danger' onClick={this.handleFavorites}>Remove from favorites</Button>
    }
    if (obj.mediaType === 'song') {
      card = (
        <Card className='mb-4'>
          <CardBody>
            <div className='col-sm-auto'>
              <img className='pb-3' src={obj.image} alt={obj.title} />
            </div>
            <div className='col-sm'>
              <CardTitle className='card-title'>
                <a href={obj.url} target='_blank' rel='noopener noreferrer'> {obj.title} </a>
              </CardTitle>
              <CardText>Album: {obj.album}</CardText>
              <CardText>Type: {obj.mediaType}</CardText>
              <CardText>Genre: {obj.genre}</CardText>
              <CardText>
                <cite>
                  <a href={obj.artistUrl} target='_blank' rel='noopener noreferrer'>{obj.artistName}</a> {obj.releaseDate} {obj.country}
                </cite>
              </CardText>
              {button}
              {newsButton}
            </div>
          </CardBody>
        </Card>
      )
    } else if (obj.mediaType === 'audiobook') {
      card = (

        <Card className='mb-4'>
          <CardBody>
            <div className='col-sm-auto'>
              <img className='pb-3' src={obj.image} alt={obj.title} />
            </div>
            <div className='col-sm'>
              <CardTitle className='card-title'>
                <a href={obj.url} target='_blank' rel='noopener noreferrer'> {obj.title} </a>
              </CardTitle>
              <CardText>Type: {obj.mediaType}</CardText>
              <CardText>Genre: {obj.genre}</CardText>
              <CardText>
                <cite>
                  <a href={obj.artistUrl} target='_blank' rel='noopener noreferrer'>{obj.artistName}</a> {obj.releaseDate} {obj.country}
                </cite>
              </CardText>
              <CardText>Description: {obj.description}</CardText>
              {button}
              {newsButton}
            </div>
          </CardBody>
        </Card>
      )
    } else {
        card = (
          <Card className='mb-4'>
            <CardBody>
              <div className='col-sm-auto'>
                <img className='pb-3 img-fluid' src={obj.poster} alt={obj.title} />
              </div>
              <div className='col-sm'>
                <CardTitle className='card-title'>
                  <p> {obj.title} </p>
                </CardTitle>
                <CardText>Genre: {obj.genre}</CardText>
                <CardText>Release Date: {obj.releaseDate} </CardText>
                <CardText>Description: {obj.overview}</CardText>
                <CardText>Rating: {obj.voteAverage}</CardText>
                {button}
                {newsButton}
              </div>
            </CardBody>
          </Card>
      )
    }
    return (
      <div className='col-lg-4 col-md-6 col-xs-3 d-flex'>
        {card}
      </div>
    )
  }
}

export { ContentCard };