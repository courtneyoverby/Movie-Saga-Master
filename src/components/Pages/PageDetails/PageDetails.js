import React, { Component } from "react";
import { connect } from "react-redux";

class PageDetails extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_GENRES" });
  }

  backOnClick = (event) => {
    this.props.history.push("/");
  };

  editOnClick = (event) => {
    this.props.history.push("/edit/${this.props.match.params.id}");
  };
  render() {
    return <div></div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageDetails);
