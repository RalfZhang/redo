/**
 * Body
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-09 01:15:14
 * @version 1.0.0
 */

import React, { Component } from 'react';
import Movie from './movie/Movie.js'
import style from './style.css';



export default class Content extends Component {
  render() {
    return (
      <div className={style.content}>
        <Movie />
      </div>
    )
  }
}