import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
} from 'reactstrap';

// This is the search bar that lives on the right side of the nav bar
class NavForm extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      term: ''
    };
  }

  // Make the request to search
  search() {
    let searchTerm = this.state.term;
    this.props.searchCallback(this.props.currentTab, searchTerm);
    this.setState({ term: '' });
  }

  // Handles the input of the search
  handleInput = (event) => {
    this.setState({ term: event.target.value });
  }

  render() {
    // Shows the spinner when a request is being made
    let loader = <i className='d-none fa fa-spinner fa-spin fa-fw'
      aria-hidden='true' />;
    if (this.props.isLoading) {
      loader = <i className='fa fa-spinner fa-spin fa-fw'
        aria-hidden='true' />
    }
    return (
      <Form>
        <div className="form-row">
          <div className="col">
            <Input onInput={this.handleInput} id="search-input" className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          </div>
          <div className="col">
            <Button onClick={this.search} id="search-button" outline color='success' className="my-2 my-sm-0">
              {loader}Search
            </Button>
          </div>
        </div>
      </Form>
    )
  }
}

export { NavForm };