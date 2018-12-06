import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

// This is the search bar that lives on the right side of the nav bar
class NavForm extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      term: ''
    };
  }

  // Make the request to search
  search() {
    let searchTerm = this.state.term;
    this.props.searchCallback(this.props.currentTab, searchTerm);
    this.setState({
      term: '',
      dropdownOpen: false,
    });
  }

  // Handles the input of the search
  handleChange = (event) => {
    this.setState({ term: event.target.value });
  }

  // Handles searching on pressing enter 
  handleSubmit = (event) => {
    event.preventDefault();
    this.search();
  }

  // Signs the user out
  handleSignOut = () => {
    this.props.handleSignOut();
  }

  // Toggles the button dropdown
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  render() {
    // Shows the spinner when a request is being made
    let loader = <i className='d-none fa fa-spinner fa-spin fa-fw'
      aria-hidden='true' />;
    if (this.props.isLoading) {
      loader = <i className='fa fa-spinner fa-spin fa-fw'
        aria-hidden='true' />
    }
    let search = '';
    if (this.props.isMain){
      search = (<div className="form-row">
      <div className="col">
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret color='primary'>
            {this.props.currentUser.displayName}
          </DropdownToggle>
          <DropdownMenu>
            {/* Add link to navigate to favorites */}
            <DropdownItem>
              <NavLink to='/favorites' id='favorites'>Favorites</NavLink>
            </DropdownItem>
            <DropdownItem onClick={this.handleSignOut}>Sign Out</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </div>)
    }else{
      search = (<div className="form-row">
      <div className="col">
        <Input onChange={this.handleChange} id="search-input" className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      </div>
      <div className="col">
        <Button onClick={this.search} id="search-button" outline color='success' className="my-2 my-sm-0">
          {loader}Search
        </Button>
      </div>
      <div className="col">
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret color='primary'>
            {this.props.currentUser.displayName}
          </DropdownToggle>
          <DropdownMenu>
            {/* Add link to navigate to favorites */}
            <DropdownItem>
              <NavLink to='/favorites' id='favorites'>Favorites</NavLink>
            </DropdownItem>
            <DropdownItem onClick={this.handleSignOut}>Sign Out</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </div>)
    }
    return (
      <Form onSubmit={this.handleSubmit} >
        {search}
      </Form>
    )
  }
}

export { NavForm };