import React, { Component } from 'react';
import { Header } from '../components/headers/Headers';
import { MovieObject } from '../models/MovieObject';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.objs.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.objs.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  
  render() {
    const { activeIndex } = this.state;
    let items = this.props.objs.map((obj) => {
      return MovieObject(obj);
    });
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.poster}
        >
          <img src={item.poster} alt={item.title} />
          <CarouselCaption captionText={item.overview} captionHeader={item.title} />
        </CarouselItem>
      );
    });
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div id='main-content'>
          <div className='container'>
            <div id='content'>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
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
      let component = <CarouselImage key={entity.id} movie={entity} />;
      return component;
    })
    return (
      <Carousel>
        {carouselItems}
      </Carousel>
    )
  }
}

class CarouselImage extends Component {
  
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