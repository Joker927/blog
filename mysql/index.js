var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'blog'
});

connection.connect();

var sql = "SELECT * from user";

connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});