/**
 * Body
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-09 23:35:11
 * @version 1.0.0
 */


import React, { Component } from 'react';
import Subject from '../../components/Subject.js';
import ComingSubject from '../../components/ComingSubject.js';
import Divider from '../../components/Divider.js';



export default class Movie extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <div className="text">热映中</div>
          <div className="more">更多</div>
        </div>
        <div>
          <div className="row">
            <Subject/>
            <Subject/>
            <Subject/>
          </div>
          <div className="row">
            <Subject/>
            <Subject/>
            <Subject/>
          </div>
        </div>
        <Divider />
        <div className="title">
          <div className="text">即将上映</div>
          <div className="more">更多</div>
        </div>
        <div>
          <div className="row">
            <ComingSubject/>
            <ComingSubject/>
            <ComingSubject/>
          </div>
          <div className="row">
            <ComingSubject/>
            <ComingSubject/>
            <ComingSubject/>
          </div>
        </div>

      </div>
    )
  }
}