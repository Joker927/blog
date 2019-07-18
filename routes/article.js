var express = require('express');
var Article = require('../controller/article.js');
var router = express.Router();

router.get('/detail', Article.detail);
router.post('/details', Article.details);

module.exports = router;