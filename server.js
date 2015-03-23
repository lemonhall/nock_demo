var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.route('/')
   .get(function(req, res) {
	console.log("I am in index");
	res.render('index', { title: 'Hey', message: 'Hello there!'});
   });

app.listen(3000);
