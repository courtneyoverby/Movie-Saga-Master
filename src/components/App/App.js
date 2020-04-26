import React, { Component } from "react";
import "./App.css";
// import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import PageMovies from "../Pages/PageMovies/PageMovies.js";
import PageDetails from "../Pages/PageDetails/PageDetails.js";
import PageEdit from "../Pages/PageEdit/PageEdit.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="appHeader">
            <h1 className="appTitle">Movie Sagas</h1>
          </header>
          <br />

          <Route exact path="/" component={PageMovies} />
          <Route exact path="/details/:id" component={PageDetails} />
          <Route exact path="/edit/:id" component={PageEdit} />
        </Router>
      </div>
    );
  }
}

export default App;
