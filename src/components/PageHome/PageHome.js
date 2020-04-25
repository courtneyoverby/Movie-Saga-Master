import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class PageHome extends Component {
  // Renders the entire app on the DOM
  render() {
    return <div></div>;
  }
}

export default connect()(PageHome);
