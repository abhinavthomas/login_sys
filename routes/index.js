var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var upload = multer({dest:'public/uploads/'});
// Get Homepage

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

router.get('/', function(req, res){
	res.render('index');
});

router.get('/home', ensureAuthenticated, function (req, res, next) {

	res.render('home',{title:'Express'});
});

// router.post('/home', ensureAuthenticated, function(req, res,next){

// 	req.flash('success_msg', 'Upload Finished');

// 	res.redirect('/');
	
// });

// router.post('/edit', ensureAuthenticated, function (req, res, next){

// var file = new File();
// 	file.file = req.body.file;
// 	file.links = req.body.links;

// 	file.save(function(err,file){
// 		if(err){
// 			next(err);
// 			return;
// 		}
// 	res.redirect('/');

// 	});

// });
module.exports = router;