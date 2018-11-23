import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class HeaderY extends Component {
  render() {
    let title = this.props.title;
    let subtitle = this.props.subtitle;
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3 title">{title}</h1>
            <p className="lead title">{subtitle}</p>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export { HeaderY };