var express=require('express')
var router = express.Router()
var user=require('../models/user')
var news=require('../models/news')


router.get('/user/news', function (req, res){
	let res_data;
	let user_id = req.cookies.user_id;
	console.log(user_id)
	news.find({user_id}).then((docs) => {
		console.log('----',docs)
		res.send(docs)
	})
})
router.get('/user/news/detail', function (req, res){
	let res_data;
	let _id = req.query.id;
	console.log(req.query)
	news.findOne({_id},(err,doc) => {
		doc.view++;
		doc.save();
		res.send(doc)
	})
})

router.post('/user/news/add',(req,res) => {
	// let user_id = req.body.params.user_id;
	let user_id = req.cookies.user_id;
	let {title,content,creator,img} = req.body
	news.create({user_id,title,content,creator,img}).exec(res.send('操作成功'));
})

router.post('/user/news/update',(req,res) => {
	// let user_id = req.body.params.user_id;
	let user_id = req.cookies.user_id;
	let {_id,title,content,creator,img} = req.body
	news.update({_id},{title,content,creator,img}).exec(res.send('操作成功'));
})

router.delete('/news/del',(req,res) => {
	news.remove({_id:req.body._id}).exec(res.send('删除成功'))
})

router.post('/news/feedback', (req, res) => {
	let {
		_id,
		feedback
	} = req.body.params
	let findUser = function (entity) {
		entity.findOne({_id},(err,doc)=>{
			doc.feedback.push(feedback);
			res.send('反馈成功')
		})
	}
	findUser(news);
})
module.exports = router