import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LeftNav } from '../navs/Navs';
import { NavForm } from '../forms/Forms';

class FixedNavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className='navbar-expand-md navbar-dark fixed-top bg-dark'>
        <Link to='/' className='navbar-brand'>Title goes here</Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <LeftNav />
          <NavForm searchCallback={this.props.searchCallback} isLoading={this.props.isLoading} />
        </Collapse>
      </Navbar>
    )
  }
}

export { FixedNavBar };