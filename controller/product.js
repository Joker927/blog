var express = require('express');
var mysql = require('../mysql/index.js');
var router = express.Router();
var querystring = require('querystring');

class Product {
    constructor() {

    }

    //获取所有产品列表
    list(req, res, next) {
        var sql = "SELECT * FROM `blog`.`product`";
        mysql.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.send({
                status: 200,
                message: 'success',
                data: results
            })
        });
    }

    //post方法，传入id,获取数据
    detail(req, res, next) {
        var sql = "SELECT * FROM `blog`.`product` WHERE `id` = " + req.body.id;
        mysql.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.send({
                status: 200,
                message: 'success',
                data: results[0]
            })
        });
    }
}

module.exports = new Product();