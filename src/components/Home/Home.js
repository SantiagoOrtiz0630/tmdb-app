import React, { Component } from 'react';
import './Home.scss';
import SearchBar from '../SearchBar/SearchBar';
import MovieCard from '../MovieCard/MovieCard';

import apiSearch from '../../Helper/apiSearch';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  searchByTitle(search) {

    if (search.length < 3) {

      this.setState({ results: [] });
      return;
    }

    apiSearch.searchByTitle(search, (info) => {
      this.setState({ results: info.results });
    });
  }

  render() {
    return (
      <section className="Home">

        <div className="Home__search">

          <SearchBar onSearch={(value) => {
            this.searchByTitle(value);
          }} />
        </div>

        <div className="Home__films">

          <div className="Home__cont">

            {this.state.results.map((movie) => {

              let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
              return <MovieCard
                key={movie.id}
                id={movie.id}
                img={movie.poster_path ? image : apiSearch.defaultImg}
                title={movie.title}
                description={movie.overview}
                apiKey = {this.state.apiKey}
                average = {movie.vote_average}
              />
            })}

          </div>
        </div>

      </section>
    );
  }
}

export default Home;
