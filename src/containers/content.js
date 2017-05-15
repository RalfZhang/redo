/**
 * Body
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-09 01:15:14
 * @version 1.0.0
 */

import React, { Component } from 'react';
import Movie from './movie/Movie.js'
import Book from './book/Book.js'
import style from './style.css';
import {
  Route,
} from 'react-router-dom'



export default class Content extends Component {
  render() {
    return (
      <div className={style.content}>
        content
        <Route path='/movie' component={Movie}></Route>
        <Route path='/book' component={Book}></Route>

      </div>
    )
  }
}