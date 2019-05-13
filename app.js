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

app.use(bodyParser.json());
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
/* app.use(function(req, res, next) {
  next(createError(404));
}); */

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

var port = process.env.PORT || 80; // 设置端口号：3000
console.log(port)
var server = app.listen(port); // 监听 port[3000]端口
var io = require('socket.io')(server);

const user = require('./models/user.js'); // 载入mongoose编译后的模型user

app.use('/', require('./router/profile'))
app.use('/', require('./router/news'))
app.use('/', require('./router/upload'))

app.all('/*', (req,res,next) => {
	let user_id = req.cookies.user_id
	if(user_id == undefined && req.path != '/login'){
		res.send({code: 401});
	}else{
		next();
	}
})

app.post('/login', function (req, res) {
	console.log('aaa')
	let user_id = req.body.params.username;
	let pw = req.body.params.password;
	let res_data;
	let findUser = (entity) => {
		entity.findOne({
			user_id: user_id
		}, function (err, doc) {
			if (err || doc == null) {
				res_data = {
					code: 201,
					msg: "请正确检查用户名和密码",
				}
				res.send(res_data);
			} else {
				if (pw == doc.pw) {
					res_data = {
						code: 200,
						msg: "登录成功！",
						data: doc
					}
					res.cookie('user_id', user_id);
					res.send(res_data);
				} else {
					res_data = {
						code: 201,
						msg: "密码错误",
					}
					res.send(res_data);
				}
			}
		})
	}
	findUser(user);
});
module.exports = app;
