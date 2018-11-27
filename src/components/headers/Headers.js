import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

// This is the jumbotron that acts as a large heading
class Header extends Component {
  render() {
    let title = this.props.title;
    let subtitle = this.props.subtitle;
    return (
      <div>
        <Jumbotron id='header' fluid>
          <Container fluid>
            <h1 id='title' className="display-3 title">{title}</h1>
            <p id='subtitle' className="lead title">{subtitle}</p>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export { Header };