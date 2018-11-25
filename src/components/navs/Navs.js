import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class LeftNav extends Component {
  render() {
    return (
      <Nav className='mr-auto' navbar>
        <NavItem>
          <NavLink exact to='/' className='nav-link' activeClassName='activeLink'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/favorites' className='nav-link' activeClassName='activeLink'>Favorites</NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export { LeftNav };