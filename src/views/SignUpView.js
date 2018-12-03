import React, { Component } from 'react';
import { Header } from '../components/headers/Headers';
import SignUpForm from '../components/forms/SignUpForm';
import { AppName, AppDescription } from '../resources/strings/Constants';

export default class SignUpView extends Component {
  render() {
    return (
      <div>
        <Header title={`Welcome to ${AppName}.`} subtitle={`${AppDescription} Sign up today!`} />
        <div className='container'>
        {this.props.errorMessage && <p className="alert alert-danger">{this.props.errorMessage}</p>}
          <SignUpForm handleSignUp={this.props.handleSignUp} errorMessage={this.props.errorMessage}/>
        </div>
      </div>
    )
  }
}