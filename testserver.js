var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use( proxy('/api', {
      target: 'http://api.douban.com/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }));
app.listen(3001, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
});
