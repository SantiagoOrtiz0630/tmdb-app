import React, { Component } from 'react';

import apiSearch from '../../Helper/apiSearch';

import './Movie.scss';

class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movie: null
    }
  }

  getId() {
    return this.props.match.params.id;
  }

  getMovie() {
    apiSearch.searchMovie(this.getId(), (info) => {
      this.setState({ movie: info });
      console.log(this.state.movie.title);
    });
  }

  render() {

    //para que se ejecute cada vez que se inicie

    if (this.state.movie === null) {
      this.getMovie();
    }

    //para que se ejecute cada vez que cambia su id
    if (this.state.movie !== null) {
      let idLink = parseInt(this.props.match.params.id);
      let idMovie = parseInt(this.state.movie.id);
      if (idLink !== idMovie) {
        this.getMovie();
      }
    }

    return (
      <div className="Movie">
        {(this.state.movie) ?
          <div className="Movie-cont" style={ { backgroundImage: `url(${apiSearch.getImgLink()}${this.state.movie.backdrop_path})` } } >

            <div className="Movie-cont__view">

              <h1 className="Movie-cont__view-title">{this.state.movie.title}</h1>


            </div>

          </div> : ""}



      </div>
    );
  }
}

export default Movie;
