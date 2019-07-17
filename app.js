var express = require('express');
var mysql = require('./mysql/index.js');
var router = require('./routes/index.js');

const app = express();

//配置请求头，解决跨域问题
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
  res.header("X-Powered-By", '3.2.1')
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
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