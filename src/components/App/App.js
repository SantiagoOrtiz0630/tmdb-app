import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Error from '../Error/Error';

class App extends Component {

  render() {
    return (
      <div className="App">

        <BrowserRouter>

          <Switch>

            <Route path="/" component={Home} exact />
            <Route path="/Movie:id" component={Movie} exact />
            <Route component={Error} />

          </Switch>

        </BrowserRouter>

      </div>
    );
  }
}

export default App;
