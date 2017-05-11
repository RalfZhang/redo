/**
 * Body
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-09 23:35:11
 * @version 1.0.0
 */


import React, { Component } from 'react';
import axios from 'axios';

import Subject from '../../components/Subject.js';
import ComingSubject from '../../components/ComingSubject.js';
import Divider from '../../components/Divider.js';

import styles from './movie.css'



export default class Movie extends Component {
  constructor(...args) {
    super(...args)
    this.state={
      inTheaters: {
        title: '',
        subjects: [],
      },
      comingSoon: {
        title: '',
        subjects: [],
      }
    }
  }
  // getInitialState() {
  //   return {data: {
  //     inTheaters: {
  //       title: '',
  //       subjects: [],
  //     }
  //   }};
  // }

  componentDidMount(){
    axios.get('/api/movie/in_theaters', {
      params: {
        city: '广州'
      }
    }).then( res => {
      console.log('res', res)
      // this.state.inTheaters.subjects=res.data.subjects;
      this.setState({
        inTheaters: res.data
      })
      console.log('sub', this.state)
    })

    axios.get('/api/movie/coming_soon', {
      params: {
        city: '广州'
      }
    }).then( res => {
      console.log('res', res)
      // this.state.inTheaters.subjects=res.data.subjects;
      this.setState({
        comingSoon: res.data
      })
      console.log('sub', this.state)
    })
  }
  render() {
    return (
      <div>
        <div className={styles.box}>
          <div className={styles.title}>
            <div className={styles.text}>热映中</div>
            <div className={styles.more}>更多</div>
          </div>
          <div>
            <div className={styles.row}>
              <div className={styles.subject}>
                <Subject data={this.state.inTheaters.subjects[0]}/>
              </div>
              <div className={styles.subject}>
                <Subject data={this.state.inTheaters.subjects[1]}/>
              </div>
              <div className={styles.subject}>
                <Subject data={this.state.inTheaters.subjects[2]}/>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.subject}>
                <Subject data={this.state.inTheaters.subjects[3]}/>
              </div>
              <div className={styles.subject}>
                <Subject data={this.state.inTheaters.subjects[4]}/>
              </div>
              <div className={styles.subject}>
                <Subject data={this.state.inTheaters.subjects[5]}/>
              </div>
            </div>
          </div>

        </div>
        <Divider />
        
        <div className={styles.box}>

          
          <div className={styles.title}>
            <div className={styles.text}>热映中</div>
            <div className={styles.more}>更多</div>
          </div>
          <div>
            <div className={styles.row}>
              <div className={styles.subject}>
                <ComingSubject data={this.state.comingSoon.subjects[0]}/>
              </div>
              <div className={styles.subject}>
                <ComingSubject data={this.state.comingSoon.subjects[1]}/>
              </div>
              <div className={styles.subject}>
                <ComingSubject data={this.state.comingSoon.subjects[2]}/>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.subject}>
                <ComingSubject data={this.state.comingSoon.subjects[3]}/>
              </div>
              <div className={styles.subject}>
                <ComingSubject data={this.state.comingSoon.subjects[4]}/>
              </div>
              <div className={styles.subject}>
                <ComingSubject data={this.state.comingSoon.subjects[5]}/>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}