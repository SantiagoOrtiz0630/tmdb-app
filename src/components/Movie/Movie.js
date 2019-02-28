import React, { Component } from 'react';

import movieSearch from '../../Helper/movieSearch';

import './Movie.scss';


class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      apiKey: "2c73b0f220a02912d9c2cd39c09588e2",
      apiDb: "http://api.themoviedb.org/3/",
      movie: null
    }

    this.getMovie();

  }

  getId() {
    let locationWindow = window.location.pathname;
    let locationArray = locationWindow.split('/');
    let movieArray = locationArray[1].split(':');
    return movieArray.slice(-1)[0]; 
  }

  getMovie() {
    movieSearch.searchMovie(this.getId(), this.state.apiDb, this.state.apiKey, (info) => {
      this.setState({ movie: info });
      console.log(this.state.movie.title);
    });
  }

  render() {
    return (
      <div className="Movie">

        <div className="Movie-view" > 
        { (this.state.movie) ? <h1>{this.state.movie.title}</h1>: ""}
        </div>

      </div>
    );
  }
}

export default Movie;
