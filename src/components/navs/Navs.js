import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// This nav shows the clickable tabs.
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.handleTab = this.handleTab.bind(this);
  }

  // Tells the app which tab it's currently on
  handleTab = (event) => {
    this.props.handleTab(event.target.id);
  }

  render() {
    return (
      <Nav className='mr-auto' navbar>
        <NavItem onClick={this.handleTab}>
          <NavLink to='/music' id='song' className='nav-link' activeClassName='activeLink'>Music</NavLink>
        </NavItem>
        <NavItem onClick={this.handleTab}>
          <NavLink to='/movies' id='movie' className='nav-link' activeClassName='activeLink'>Movies</NavLink>
        </NavItem>
        <NavItem onClick={this.handleTab}>
          <NavLink to='/books' id='audiobook' className='nav-link' activeClassName='activeLink'>Books</NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export { LeftNav };