import React, { Component } from 'react';
import { Header } from '../components/headers/Headers';
import { CardList } from '../components/cards/Cards';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      value: '',
      dropdownOpen: false,
      movies: []
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.filterGenre(this.state.value);
    event.preventDefault();
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  filterGenre(id) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=06281c636bf07bf7ba505c2c83932760&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${id}`;
    this.setState({ isLoading: true });
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({ movies: data.results }); // TODO: MOVIE DATA
    }).catch((err) => {
      console.log(`Error: ${err}`);
    }).then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    let cards;
    if (this.state.movies.length === 0) {
      cards = <CardList objs={this.props.objs} handleFavorites={this.props.handleFavorites} />;
    } else {
      cards = <CardList objs={this.state.movies} handleFavorites={this.props.handleFavorites} />;
    }

    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div id='main-content'>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Filter by Genre:
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="28">Action</option>
                  <option value="12">Adventure</option>
                  <option value="16">Animation</option>
                  <option value="35">Comedy</option>
                  <option value="80">Crime</option>
                  <option value="99">Documentary</option>
                  <option value="18">Drama</option>
                  <option value="10751">Family</option>
                  <option value="14">Fantasy</option>
                  <option value="36">History</option>
                  <option value="27">Horror</option>
                  <option value="10402">Music</option>
                  <option value="9648">Mystery</option>
                  <option value="10749">Romance</option>
                  <option value="878">Science Fiction</option>
                  <option value="10770">TV Movie</option>
                  <option value="53">Thriller</option>
                  <option value="10752">War</option>
                  <option value="37">Western</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div id='content'>
            {cards}
          </div>
        </div>
      </div>
    )
  }
}

export { Movies };