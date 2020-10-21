import React, { Component } from "react";
import Joi from 'joi-browser';
import Form from './common/form';


class LoginForm extends Form {
  state = {
    data : { username : '', password : '' },
    errors : {}
  }

  schema = {
    username : Joi.string().required().label('Username'),
    password : Joi.string().required().label('Password')
  }
  
  doSubmit = () =>
  {
    // calling server
    console.log('submitted');

  }

  render() {
    return <div>
      <h1 className='header'>Login Form</h1>
      <form onSubmit={this.handleSubmit}>
        {this.renderInput('username', 'Username')}
        {this.renderInput('password', 'Password', 'password')}
        {this.renderSubmit('login')}
      </form>
    </div>;
  }
}

export default LoginForm;
