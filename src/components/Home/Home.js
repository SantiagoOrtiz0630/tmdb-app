import React, { Component } from 'react';
import './Home.scss';
import SearchBar from '../SearchBar/SearchBar';
import MovieCard from '../MovieCard/MovieCard';

import apiSearch from '../../Helper/apiSearch';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      apiKey: "2c73b0f220a02912d9c2cd39c09588e2",
      apiDb: "http://api.themoviedb.org/3/",
      defaultImg: "https://i.pinimg.com/originals/bf/e6/4b/bfe64b2af2206edbc4075aab9f08550e.jpg"
    }
  }

  searchByTitle(search) {

    if (search.length < 3) {

      this.setState({ results: [] });
      return;
    }

    apiSearch.searchByTitle(search, this.state.apiDb, this.state.apiKey, (info) => {
      this.setState({ results: info.results });
    });
  }

  render() {
    return (
      <div className="Home">

        <div className="Home__search">

          <SearchBar onSearch={(value) => {
            this.searchByTitle(value);
          }} />
        </div>

        <div className="Home__films">

          <div className="Home__films__cont">

            {this.state.results.map((movie) => {

              let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
              return <MovieCard
                key={movie.id}
                id={movie.id}
                img={movie.poster_path ? image : this.state.defaultImg}
                title={movie.title}
                description={movie.overview}
                apiKey = {this.state.apiKey}
              />
            })}

          </div>
        </div>

      </div>
    );
  }
}

export default Home;
