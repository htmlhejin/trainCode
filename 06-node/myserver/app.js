var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入自定义模块
var indexRouter = require('./routes/index');  //index是二级路由
var usersRouter = require('./routes/users');  //users是二级路由

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //试图模板在views文件夹下
app.set('view engine', 'jade'); //用jade模板引擎解析视图

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  //载入静态资源

// 使用中间件 我们叫它一级路由
app.use('/', indexRouter);  //indexRouter  是一级路由
app.use('/users', usersRouter); //usersRouter  是一级路由

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
