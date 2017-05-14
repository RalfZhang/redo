import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Movie from './containers/movie/Movie'

// import Routers from './router/index'


ReactDOM.render((
  <Router >
    
  <div>
    <Route exactly pattern="/" component={App} />
  </div>
    {/*<Route path="/" component={App}>
      <Route path="moive" component={Movie}/>
    </Route>*/}
  </Router >
  ), document.getElementById('root'));
