var user = require('./user.js');
var article = require('./article');

module.exports = app => {
  app.use('/users', user);
  app.use('/article', article);
}