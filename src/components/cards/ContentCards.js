import React, { Component } from 'react';
import {
  Card,
  CardImg, CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

class SongCard extends Component {
  render() {
    let obj = this.props.obj;
    return (
      <div className='col-md-6 col-xs-3 d-flex'>
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
              <Button color='btn btn-success'>Add to favorites</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

class AudioBookCard extends Component {
  render() {
    let obj = this.props.obj;
    return (
      <div className='col-md-6 col-xs-3 d-flex'>
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
              <Button color='btn btn-success'>Add to favorites</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

// TODO: Implement this using the other movie API
class MovieCard extends Component {
  render() {
    return (
      <div>This has not been implemented yet</div>
    )
  }
}

export { SongCard, AudioBookCard, MovieCard };