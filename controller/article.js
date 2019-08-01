var express = require('express');
var mysql = require('../mysql/index.js');
var router = express.Router();
var querystring = require('querystring');

class Article {
    constructor() {

    }
    //get方法，传入id,获取数据
    detail(req, res, next) {
        var sql = "SELECT * from user";
        mysql.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.send({
                status: 200,
                message: 'success',
                data: [{
                    url: req.query,
                    user: 'Article',
                    results: results
                }]
            })
        });
    }
    //post方法，传入id,获取数据
    details(req, res, next) {
        res.send({
            status: 200,
            message: 'success',
            data: req.body
        })
    }
}

module.exports = new Article();