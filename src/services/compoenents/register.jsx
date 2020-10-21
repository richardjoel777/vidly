import React, { Component } from 'react';
import Form from './common/form';
import  Joi from 'joi-browser';

class Register extends Form {
    state = { data : { username: "", password: '', name : '' }, errors : {} }

    schema = {
        username : Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).label('Username'),
        password : Joi.string().required().min(5).max(30).label('Password'),
        name : Joi.string().required().label('Name')
    }

    doSubmit = () =>
  {
    // calling server
    console.log('submitted');

  }
    render() { 
        return <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderSubmit('Register')}
        </form>
      </div>;
    }
}
 
export default Register;