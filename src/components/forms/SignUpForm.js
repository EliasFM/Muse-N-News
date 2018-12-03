import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      userName: undefined,
    }
  }

  //update state for specific field
  handleChange = (event) => {
    let field = event.target.name; //which input
    let value = event.target.value; //what value

    let changes = {}; //object to hold changes
    changes[field] = value; //change this field
    this.setState(changes); //update state
  }

  //handle signUp button
  handleSignUp = (event) => {
    event.preventDefault(); //don't submit
    let avatar = this.state.avatar || 'img/no-user-pic.png'; //default to local pic
    this.props.signUpCallback(this.state.email, this.state.password, this.state.handle, avatar);
  }

  //handle signIn button
  handleSignIn = (event) => {
    event.preventDefault(); //don't submit
    this.props.signInCallback(this.state.email, this.state.password);
  }

  render() {
    return (
      <Form>
        {/* email */}
        <FormGroup>
          <Label for="email-field">Email</Label>
          <Input type="email" name="email" id="email-field" placeholder="Email" />
        </FormGroup>

        {/* password */}
        <FormGroup>
          <Label for="password-field">Password</Label>
          <Input type="password" name="password" id="password-field" placeholder="Password placeholder" />
        </FormGroup>

        {/* password repeat */}
        <FormGroup>
          <Label for="password-repeat-field">Repeat Password</Label>
          <Input type="password" name="password" id="password-repeat-field" placeholder="Password" />
        </FormGroup>

        {/* username */}
        <FormGroup>
          <Label for="username-field">Username</Label>
          <Input type="text" name="text" id="username-field" placeholder="Enter a cool username" />
        </FormGroup>

        <Button color='primary'>Sign Up</Button>
      </Form>
    )
  }
}