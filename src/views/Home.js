import React, { Component } from 'react';
import { Header } from '../components/headers/Headers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ data: 'not implemented' });
  }

  render() {
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div id='main-content'>
          <div className='container'>
            <div id='content'>
              {this.state.data}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Home };