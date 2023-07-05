const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://162.243.162.41/guest/prueba',
      changeOrigin: true,
    })
  );
};
