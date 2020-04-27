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
    const id = Number(this.props.match.params.id);
    const filteredMovie = this.props.store.movies.filter((movie) => {
      return movie.id === id;
    });
    const filteredGenre = this.props.store.movies.filter((genre) => {
      return genre.id === id;
    });
    return (
      <div>
        <button onClick={this.backOnClick}>Back To Movies</button>
        <button onClick={this.editOnClick}>Edit This Movie</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageDetails);
