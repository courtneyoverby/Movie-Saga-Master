import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem.js";

class MovieList extends Component {
  componentDidMount() {
    console.log(this.props.store.movies.map);
    this.props.dispatch({ type: "GET_MOVIES " });
  }
  render() {
    return (
      <div>
        {this.props.store.movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieList);
