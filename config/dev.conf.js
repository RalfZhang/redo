module.exports = {
  proxyTable: {
    '/api': {
      target: 'http://api.douban.com/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
    '/img': {
      target: 'https://img3.doubanio.com',
      changeOrigin: true,
      pathRewrite: {
        '^/img': '',
      },
      onProxyReq(proxyReq, req, res) {
        // add custom header to request
        proxyReq.setHeader('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');
        // or log the req
      }
    }
  }
}