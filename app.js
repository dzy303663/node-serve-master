var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); // 加载mongoose模块


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
//跨域
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	// if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
	// else 
	next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use(express.static('./'));
app.use(express.static('dist'));


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


mongoose.connect('mongodb://localhost:27017/tourismManage', function (err) {
	if (err) {
		// 连接mongodb本地数据库imovie
		console.log('MongoDB connection failed!')
	} else {
		// 连接mongodb本地数据库imovie
		console.log('MongoDB connection success!');
	}
});

var port = process.env.PORT || 5200; // 设置端口号：3000
var server = app.listen(port); // 监听 port[3000]端口
var io = require('socket.io')(server);


module.exports = app;
