'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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


function isPalindrome (str){
	var streplace = str.replace(/[^A-Za-z0-9]/g, '')
	var reversestr = str.split('').reverse().join('');
				
	if (streplace.toUpperCase() === reversestr.toUpperCase()){
		console.log("E palindrome  ", streplace, reversestr)
		return true	
	} else {
		console.log("Nao E palindrome  ", streplace, reversestr)
		return false
	}
}

app.post('/palindrome', function(req, res) {
		
	var strrec = req.body.palindrome
		
	if (isPalindrome(strrec)){
		res.json(true)
	}else{
		res.status(400).send('Current string isnt palindrome')
	}

});


