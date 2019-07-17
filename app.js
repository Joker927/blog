var express = require('express');
var mysql = require('./mysql/index.js');
var router = require('./routes/route.js');

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
// app.use('/', express.static('static'));

router(app);


// app.get('/product', function (req, res) {
//   res.send([{
//     user: 'joker'
//   }, {
//     user: 'joker'
//   }, {
//     user: 'joker'
//   }]);
// });

app.listen(3000, () => {
  console.log('app listen 3000');
});

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var mysql = require('./mysql/index.js');

// var indexRouter = require('./routes/index');


// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: false
// }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);


// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;