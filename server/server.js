'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var palindrome = require('./palindrome');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
		
app.listen(3412);

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/', function(req, res) {
	res.json(true);
});

app.post('/palindrome', function(req, res) {
		
	var strrec = req.body.palindrome
		
	if (palindrome.isPalindrome(strrec)){
		res.json(true)
	}else{
		res.status(400).send('Current string isnt palindrome')
	}

});


