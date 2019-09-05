var express = require('express');
var Operator = require('../controller/operator.js');
var router = express.Router();

router.post('/banner', Operator.banner);
router.post('/topicList', Operator.topicList);

module.exports = router;