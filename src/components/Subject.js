/**
 * 单个小图
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-10 08:25:59
 * @version 1.0.0
 */


import React, { Component } from 'react';
import styles from './subject.css'

export default class Subject extends Component {
  render(){

    return (
      
            <div className={styles.subject}>
              <div className={styles.img}>
                  <img className={styles.src} src={this.props.data && this.props.data.images && this.props.data.images.large} />
              </div>
              <div className={styles.name}>{this.props.data && this.props.data.title}</div>
              <div className={styles.star}></div>
            </div>
    )
  }
}