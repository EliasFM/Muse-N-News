import React, { Component } from 'react';
import { Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: true,
      email: undefined,
      password: undefined,
      passwordRepeat: undefined,
      username: undefined,
    }
    this.swap = this.swap.bind(this);
  }

  // Update state for specific field
  handleChange = (event) => {
    let field = event.target.name; //which input
    let value = event.target.value; //what value

    let changes = {}; //object to hold changes
    changes[field] = value; //change this field
    this.setState(changes); //update state
  }

  // Handle signUp button
  handleSignUp = (event) => {
    event.preventDefault(); //don't submit
    this.props.handleSignUp(this.state.email, this.state.password, this.state.passwordRepeat, this.state.username);
  }

  // Handle signIn button
  handleSignIn = (event) => {
    event.preventDefault(); //don't submit
    this.props.handleSignIn(this.state.email, this.state.password);
  }

  swap = () => {
    this.setState({ signup: !this.state.signup });
  }

  render() {
    // Shows the spinner when a request is being made
    let loader = <i className='d-none fa fa-spinner fa-spin fa-fw'
      aria-hidden='true' />;
    if (this.props.isLoading) {
      loader = <i className='fa fa-spinner fa-spin fa-fw'
        aria-hidden='true' />
    }
    if (this.state.signup) {
      return (
        <Form>
          {/* email */}
          <FormGroup>
            <Label for="email-field">Email</Label>
            <Input onInput={this.handleChange} type="email" name="email" id="email-field" placeholder="Email" />
          </FormGroup>

          {/* password */}
          <FormGroup>
            <Label for="password-field">Password</Label>
            <Input onInput={this.handleChange} type="password" name="password" id="password-field" placeholder="Password" />
          </FormGroup>

          {/* password repeat */}
          <FormGroup>
            <Label for="password-repeat-field">Repeat Password</Label>
            <Input onInput={this.handleChange} type="password" name="passwordRepeat" id="password-repeat-field" placeholder="Password" />
          </FormGroup>

          {/* username */}
          <FormGroup>
            <Label for="username-field">Username</Label>
            <Input onInput={this.handleChange} type="text" name="username" id="username-field" placeholder="Enter a cool username" />
          </FormGroup>

          <Button color='primary' onClick={this.handleSignUp}>{loader}Sign Up</Button>
          <FormText color='muted'>
            Already have an account? Sign in <Link to='/' onClick={this.swap}>here</Link>.
          </FormText>
        </Form>
      )
    } else {
      return (
        <Form>
          {/* email */}
          <FormGroup>
            <Label for="email-field">Email</Label>
            <Input onInput={this.handleChange} type="email" name="email" id="email-field" placeholder="Email" />
          </FormGroup>

          {/* password */}
          <FormGroup>
            <Label for="password-field">Password</Label>
            <Input onInput={this.handleChange} type="password" name="password" id="password-field" placeholder="Password" />
          </FormGroup>

          <Button color='primary' onClick={this.handleSignIn}>{loader}Sign In</Button>
          <FormText color='muted'>
            Don't have an account? Sign up <Link to='/' onClick={this.swap}>here</Link>.
          </FormText>
        </Form>
      )
    }
  }
}

export default SignUpForm;