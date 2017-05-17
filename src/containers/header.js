/**
 * Header
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-08 23:42:51
 * @version 1.0.0
 */

import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import styles from './style.css';

const colorStyle = {
  light: {
    color: 'rgb(255, 198, 47)'
  },
  green: {
    color: 'rgb(138, 158, 120)'
  },
  blue: {
    color: 'rgb(121, 130, 131)'
  },
  red: {
    color: 'rgb(204, 127, 102)'
  },
  yellow: {
    color: 'rgb(219, 152, 51)'
  }
}

export default class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      tabActive: 'movie'
    }
  }

  tabClick(e) {
    console.log('tab is clicked', e)
  }

  render() {
    return (
      <div className={styles.header} >
        <div className={styles.logo}  style={colorStyle.light}>Redo</div>
        <div className={styles.tab}>
          <Link className={styles.nodr} to="/moment">
            <div className={styles.item} style={colorStyle.red} onClick={this.tabClick.bind(this)}>一刻</div>
          </Link>
          <Link className={styles.nodr} to="/movie">
            <div className={styles.item} style={colorStyle.blue} onClick={this.tabClick.bind(this)}>电影</div>
          </Link>
          <Link className={styles.nodr} to="/book">
            <div className={styles.item} style={colorStyle.yellow} onClick={this.tabClick.bind(this)}>读书</div>
          </Link>
          <Link className={styles.nodr} to="/about">
            <div className={styles.item} style={colorStyle.green} onClick={this.tabClick.bind(this)}>关于</div>
          </Link>
        </div>
      </div>
    );
  }
}