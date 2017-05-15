import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import App from '../App';
import Movie from '../containers/movie/Movie'
import Book from '../containers/book/Book'


function RouteNest(props){ return (
  <Route exact={props.exact} path={props.path} render={ p => <props.component {...p} children={props.children}/> } />
)}

const Routers = props => (
  <Router >
    <RouteNest  path={'/app'} component={App}>
      <RouteNest  path={'/app/book'} component={Book}/>
      <RouteNest  path={'/app/movie'} component={Movie}/>
    </RouteNest>
  </Router >
)

export default Routers