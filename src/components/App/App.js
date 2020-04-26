import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import PageHome from "../PageHome/PageHome";
import PageDetails from "../PageDetails/PageDetails";
import PageEdit from "../PageEdit/PageEdit";

class App extends Component {
  // Renders the entire app on the DOM

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/details/:id" component={PageDetails} />
          <Route exact path="/details/:id/edit" component={PageEdit} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
