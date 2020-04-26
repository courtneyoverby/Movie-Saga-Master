import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {
  render() {
    return (
      <div>
        <div>image={this.props.movie.poster}</div>
        <h1>{this.props.movie.title}</h1>
        <div>{this.props.movie.description}</div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
