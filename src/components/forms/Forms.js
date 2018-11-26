import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
} from 'reactstrap';

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
    // TODO: set the term in the state
    let searchTerm = this.state.term;
    console.log(searchTerm);
    this.props.searchCallback(searchTerm);
    this.setState({ term: '' });
  }

  handleInput = (event) => {
    this.setState({ term: event.target.value });
  }

  render() {
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