var express = require('express');
var router = express.Router();


class User {
  constructor() {

  }
  login(req, res, next) {
    res.send([{
      user: 'joker'
    }]);
  }
}

module.exports = new User();