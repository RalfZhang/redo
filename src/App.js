import React, { Component } from 'react';

import {
  Route,
} from 'react-router-dom'

import Header from './containers/header';
import Footer from './containers/footer.js';
import Content from './containers/content.js';

import Movie from './containers/movie/Movie.js'

import './App.css';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<Content></Content>*/}
        <div className="content">
          
          <Route pattern="/movie" component={Movie} />
        </div>
        {/*<Footer />*/}

      </div>
    );
  }
}
