import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {
  onClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    return (
      <div onClick={this.itemDetails}>
        <ul>
          <img
            alt="Movie Poster"
            onClick={this.onClick(this.props.movie.id)}
            src={`/${this.props.movie.poster}`}
          />
          <h3>{this.props.movie.title}</h3>
          <span>{this.props.movie.description}</span>
        </ul>
      </div>
    );
  }
}

export default withRouter(MovieItem);
