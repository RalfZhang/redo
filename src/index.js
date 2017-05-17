import React from 'react';
import ReactDOM from 'react-dom';
require('./base.css')
// require("style-loader!css-loader!./base.css");

import Routers from './router/index'

ReactDOM.render((
  <Routers >
  </Routers >

  ), document.getElementById('root'));
