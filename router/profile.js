var express = require('express')
var router = express.Router()
var user = require('../models/user')

router.put('/user/add', function (req, res) {
	console.log('params',req.body.params)
	console.log('req',req.body)

	let {user_id,pw,role} = req.body;
	user.findOne({
		user_id
	}, (err, doc) => {
		if (doc) {
			res.send({errMsg:'该账号已存在'})
		} else {
			user.create({
				user_id,
				pw,
				role
			},function(err,doc1,doc2){
				res.send({msg:'操作成功'})
			});
		}
	})
})
router.get('/userInfo', function (req, res) {
	let user_id = req.query.user_id;
	let res_data;
	let findUser = (entity) => {
		entity.findOne({
			user_id: user_id
		}, function (err, doc) {
			res.send(doc);
		})
	}
	findUser(user)
})

router.post('/userInfo/update', (req, res) => {
	let user_id = req.body.params.user_id;
	let {
		tel,
		pw,
		role,
		headImg,
		name
	} = req.body.params
	let updateUser = function (entity) {
		entity.update({
			user_id
		}, {
			...req.body.params
		}).exec(res.send('操作成功'));
	}
	updateUser(user);
})

router.delete('/user/del',(req,res) => {
	user.remove({_id:req.body._id}).exec(res.send('删除成功'))
})

router.post('/userInfo/report', (req, res) => {
	let user_id = req.body.params.user_id;
	let {
		report
	} = req.body.params
	let findUser = function (entity) {
		entity.findOne({user_id},(err,doc)=>{
			doc.report.push(report);
			res.send('举报成功')
		})
	}
	findUser(user);
})

router.get('/user',(req,res) => {
	user.find({},(err,docs)=>{
		res.send(docs)
	})
})
module.exports = router