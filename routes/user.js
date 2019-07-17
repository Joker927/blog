var express = require('express');
var User = require('../controller/users.js');
var router = express.Router();

router.get('/login', User.login);

module.exports = router;