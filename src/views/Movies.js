import React, { Component } from 'react';
import { Header } from '../components/headers/Headers';
import { CardList } from '../components/cards/Cards';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let cards = <CardList objs={this.props.objs} handleFavorites={this.props.handleFavorites} />;

    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div id='main-content'>
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Genre:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
          <div className='container'>
            <div id='content'>
              {cards}
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export { Movies };