import React, { Component } from 'react';

import {
  Route,
} from 'react-router-dom'

import Header from './containers/header';
import Footer from './containers/footer.js';
import style from './App.css';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={style.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
