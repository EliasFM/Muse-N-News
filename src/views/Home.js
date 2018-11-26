import React, { Component } from 'react';
import { Header } from '../components/headers/Headers';
import { MovieObject } from '../models/MovieObject';
import { 
  Carousel
} from 'react-bootstrap';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ data: 'not implemented' });
  }
  // trying to implement carousel, throws error when below code is used
  // <Carousel>
  //    <PopularList objs={this.props.objs} />
  // </Carousel>
  render() {
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div id='main-content'>
          <div className='container'>
            <div id='content'>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class PopularList extends Component {
  

  render() {
    let carouselItems = this.props.objs.map((obj) => {
      let entity = MovieObject(obj);
      return <carouselImage key={entity.id} movie={entity} />;
    })
    return (
      {carouselItems}
    )
  }
}

class carouselImage extends Component {
  
  render() {
    let movie = this.props.movie;
    return (
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={movie.poster} />
        <Carousel.Caption>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }
}

export { Home };