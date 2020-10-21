import React, { Component } from "react";
import Movies from "./services/compoenents/movies";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./services/compoenents/customers";
import Rentals from "./services/compoenents/rentals";
import NotFound from "./services/compoenents/not-found";
import MoviesForm from "./services/compoenents/moviesForm";
import LoginForm from "./services/compoenents/loginForm";
import Register from "./services/compoenents/register";
import MovReg from './services/compoenents/moviereg';
class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Redirect from="/vidly_2.0/" exact to="/movies"></Redirect> 
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovReg} />
          <Route path="/movies" component={Movies}></Route/>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/register" component={Register}></Route>
          <Redirect from="/" exact to="/movies"></Redirect> 
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    );
  }
}

export default App;
