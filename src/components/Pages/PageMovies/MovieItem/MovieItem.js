import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {
  handleClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    return (
      <div handleClick={this.itemDetails}>
        <li>
          <img
            component="img"
            onClick={this.handleClick(this.props.movie.id)}
            image={this.props.movie.poster}
            alt="poster"
          />
          <h3>{this.props.movie.title}</h3>
          <span>{this.props.movie.description}</span>
        </li>
      </div>
    );
  }
}

export default withRouter(MovieItem);
