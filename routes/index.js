var user = require('./user.js');
var article = require('./article');
var product = require('./product');
var operator = require('./operator');

module.exports = app => {
  app.use('/users', user);
  app.use('/article', article);
  app.use('/product', product);
  app.use('/operator', operator);
}