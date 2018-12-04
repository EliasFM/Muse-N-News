import React, { Component } from 'react';
import { Header } from '../components/headers/Headers';
import { MovieObject } from '../models/MovieObject';
import styles from '../styles/carousel-style.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

// This class represents the home page, which has a carousel of movies
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
          key={item.id}
          className={styles.contain}
        >
          <img className={styles.image} src={item.poster} alt={item.title} />
          <CarouselCaption className={styles.caption} captionText={item.overview} captionHeader={item.title} />
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

export { Home };