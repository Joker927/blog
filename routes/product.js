var express = require('express');
var Product = require('../controller/product.js');
var router = express.Router();

router.post('/list', Product.list);
router.post('/detail', Product.detail);

module.exports = router;