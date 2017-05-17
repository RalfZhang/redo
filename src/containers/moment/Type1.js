/**
 * display style = 10001
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-16 23:55:44
 * @version 1.0.0
 */


import React, { Component } from 'react';
import styles from './Type.css'

export default class Type1 extends Component {
  render() {
    let author;
    if(this.props.data.author){
      author= 
        <div className={'small-font '+styles.author}>
          {this.props.data.author.name}
        </div>
    }
    return (
      <div className={styles.content}>
        <div className={'big-font '+styles.title}>
          {this.props.data.title}
        </div>
        {author}
        <div className={styles.article}>
          <div className={styles.text}>
            {this.props.data.abstract}
          </div>
        </div>
      </div>
    )
  }
}