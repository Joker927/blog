var express = require('express');
var Operator = require('../controller/operator.js');
var router = express.Router();

router.post('/banner', Operator.banner);

module.exports = router;