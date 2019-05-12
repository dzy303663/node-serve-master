var mongoose = require('mongoose');
var newsSchema = require('../schemas/news.js'); //引入'../schemas/user.js'导出的模式模块

// 编译生成user模型
var news = mongoose.model('news', newsSchema);

// 将user模型[构造函数]导出
module.exports = news;