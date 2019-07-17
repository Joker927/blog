var user = require('./user.js');

module.exports = app => {
  app.use('/users', user);
}