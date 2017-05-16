import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import App from '../App';
import Movie from '../containers/movie/Movie'
import Book from '../containers/book/Book'
import Moment from '../containers/moment/Moment'


function RouteNest(props){ return (
  <Route exact={props.exact} path={props.path} render={ p => <props.component {...p} children={props.children}/> } />
)}

const Routers = props => (
  <Router >
    <RouteNest  path={'/'} component={App}>
      <RouteNest  path={'/book'} component={Book}/>
      <RouteNest  path={'/movie'} component={Movie}/>
      <RouteNest  path={'/moment'} component={Moment}/>
    </RouteNest>
  </Router >
)

export default Routers