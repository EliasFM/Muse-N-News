import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
    let currentTab = this.props.currentTab;
    return (
      <Navbar className='navbar-expand-md navbar-dark fixed-top bg-dark'>
        <Link to='/' className='navbar-brand'>Muse N' News</Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <LeftNav handleTab={this.props.handleTab} />
        <NavForm searchCallback={this.props.searchCallback} isLoading={this.props.isLoading} currentTab={currentTab} />
        </Collapse>
      </Navbar>
    )
  }
}

export { FixedNavBar };