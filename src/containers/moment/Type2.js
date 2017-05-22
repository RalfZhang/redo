/**
 * display style = 10002
 * @authors RalfZ (ralfz.zhang@gmail.com)
 * @date    2017-05-16 23:55:44
 * @version 1.0.0
 */


import React, { Component } from 'react';
import axios from 'axios';
import styles from './Type.css';

export default class Type2 extends Component {
  render() {
    let author;
    if(this.props.data.author){
      author= 
        <div className={'small-font '+styles.title}>
          {this.props.data.author.name}
        </div>
    }
    /*
    let src='';
    let img = this.props.data.thumbs[0].large.url;
    window.a=axios;
    axios({
      url: '/img'+img.slice(img.indexOf('/view')),
      method: 'get',
      responseType: 'blob',
      headers: {
        'content-type': 'image/jpeg',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    }).then(
      e=>{
        let urlCreator = window.URL || window.webkitURL;
        src=urlCreator.createObjectURL(e)
      }
    )
     */
    return (
      <div className={styles.content}>
        <div className={'big-font '+styles.title}>
          {this.props.data.title}
        </div>
        {author}
        <div className={styles.article}>
          <div className={styles.pic}>
            <img src={src} alt="" className={styles.img}/>
          </div>
          <div className={styles.text}>
            {this.props.data.abstract}
          </div>
        </div>
      </div>
    )
  }
}