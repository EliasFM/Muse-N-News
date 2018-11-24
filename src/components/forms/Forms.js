import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from 'reactstrap';

class NavForm extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.search = this.search.bind(this);
    // TODO: Look for a better way to default this value rather than hard coding
    this.state = {
      currentOption: 'music',
    };
  }

  // Sets the option value from the select
  changeValue(event) {
    this.setState({
      currentOption: event.target.value
    });
  }

  // Make the request to search
  search() {
    this.props.searchCallback(this.state.currentOption)
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
          <div className="col-5">
            <InputGroup>
              <InputGroupAddon addonType='prepend'>
                <Label className="input-group-text" htmlFor="entity-select">Type</Label>
              </InputGroupAddon>
              <select onChange={this.changeValue} className="custom-select" id="entity-select">
                <option value="song">Music</option>
                <option value="movie">Movie</option>
                <option value="audiobook">Book</option>
              </select>
            </InputGroup>
          </div>
          <div className="col">
            <Input id="search-input" className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
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