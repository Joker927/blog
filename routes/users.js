var express = require('express');
var router = express.Router();


class User {
  constructor() {

  }
  login(req, res, next) {
    res.send('login is success');
  }
}

module.exports = new User();