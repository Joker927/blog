var user = require('./user.js');
var article = require('./article');
var product = require('./product');

module.exports = app => {
  app.use('/users', user);
  app.use('/article', article);
  app.use('/product', product);
}