/**
 * 分割线
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-10 08:47:53
 * @version 1.0.0
 */

import React, { Component } from 'react';

const styles = {
  width: '100%',
  height: '1px',
  backgroundColor: '#555',
  display: 'block'
}

export default class Divider extends Component {
  render(){
    return (
      <div style={styles}></div>
    )
  }
}