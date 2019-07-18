var express = require('express');
// var mysql = require('./mysql/index.js');
var router = require('./routes/index.js');
var url = require('url');
const bodyParser = require('body-parser'); //使用body-parser获取form data参数

const app = express();
//转译postq请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//配置请求头，解决跨域问题
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Content-Type, application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
  res.header("X-Powered-By", '3.2.1');

  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    //GET请求，controller从req.query中获取参数
    //POST请求,controller从req.body中获取参数
    if (req.method == "GET") {
      req.query = url.parse(req.url, true).query;
    } else if (req.method == "POST") {
      console.log(req.headers)
      // console.log(req.rawHeaders)
    }
    next();
  }
});

//代理静态文件
// app.use('/static', express.static('static'));

router(app);

app.listen(3000, () => {
  console.log('app listen 3000');
});

module.exports = app;