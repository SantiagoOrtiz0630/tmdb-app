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
      <section className="Movie">
        {(this.state.movie) ?
          <div className="Movie-cont" style={{ backgroundImage: `url(${apiSearch.getImgLink()}${this.state.movie.backdrop_path})` }} >

            <div className="Movie-cont__view">

              <div className="Movie-cont__view__contMovie">

                <h1 className="Movie-cont__view__contMovie-title">{this.state.movie.title}</h1>

                <ul className="Movie-cont__view__contMovie-companies">
                
                  {this.state.movie.production_companies.map((company, i) => {
                    return <li key={i} className="Movie-cont__view__contMovie-companies__company">
                      <h4>{company.name}</h4>

                      {(company.logo_path !== null) ? <img src={`${apiSearch.getImgLink()}${company.logo_path}`} alt=""/>:""}
                      
                      </li>
                  })}

                </ul>

              </div>

            </div>

          </div>
          :
          <div className="Movie-cont" style={{ background: 'none' }}>

            <h1 className="Movie-cont-load">Cargando...</h1>

          </div>

        }
      </section>
    );
  }
}

export default Movie;
