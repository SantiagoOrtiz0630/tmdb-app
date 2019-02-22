import React, { Component } from 'react';

import './Movie.scss';


class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.getId()
    }

  }

  getId() {
    let id = "";
    return id;
  }

  getMovie() {

  }

  render() {
    return (
      <div className="Movie">

        <div className="Movie-view" ></div>

      </div>
    );
  }
}

export default Movie;
