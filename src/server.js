'use strict';

// ==========================
// req the packages we need =
// ==========================
var express		= require('express');
var app 		= express();
var bodyParser	= require('body-parser');
var morgan		= require('morgan');
var path 		= require('path');
var request 	= require('request');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'static')));

// =======================
// configuration 		 =
// =======================
var port = process.env.PORT || 8080; 

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// ======================
// BlogSys API routes	=
// ======================

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.get('/api/getposts', (req, res) => {
	let jsondb = path.join(__dirname, 'mock-db.json');

	var readable = fs.createReadStream(jsondb);
	readable.pipe(res);
});

// ======================
// start the server		=
// ======================

var server = app.listen(port);

module.exports = server;