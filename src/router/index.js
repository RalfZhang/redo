import React from 'react';
import App from '../App';

import { Router, Route, Link, browserHistory } from 'react-router-dom';
import Movie from '../containers/movie/Movie'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="moive" component={Movie}/>
    </Route>
  </Router>
)