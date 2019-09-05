var express = require('express');
var mysql = require('../mysql/index.js');
var router = express.Router();
var querystring = require('querystring');

class Operator {
    constructor() {

    }

    //post方法，获取首页banner
    banner(req, res, next) {
        var sql = "SELECT * FROM `blog`.`banner`";
        mysql.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.send({
                status: 200,
                message: 'success',
                data: results
            })
        });
    }

    //post方法，获取首页话题列表
    topicList(req, res, next) {
        var sql = "SELECT * FROM `blog`.`topiclist`";
        mysql.query(sql, function (error, results, fields) {
            if (error) throw error;
            results.forEach(function (val) {
                val.ymProductList = JSON.parse(val.ymProductList)
            });

            res.send({
                status: 200,
                message: 'success',
                data: results
            })
        });
    }
}

module.exports = new Operator();