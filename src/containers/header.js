/**
 * Header
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-08 23:42:51
 * @version 1.0.0
 */

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="hearder">
        <div className="logo">Redo</div>
        <div>
          <div className="tab">电影</div>
          <div className="tab">读书</div>
          <div className="tab">音乐</div>
          <div className="tab">一刻</div>
        </div>
      </div>
    );
  }
}