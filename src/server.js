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
var fs 			= require('fs');
var BbPromise 	= require('bluebird');
var fileUpload 	= require('express-fileupload');



app.use(express.static(path.join(__dirname, 'static')));

// =======================
// configuration 		 =
// =======================
var port = process.env.PORT || 8080; 

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

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

app.post('/api/makepost', (req, res) => {
	console.log("KNOCK KNOCK WHOS THERE?");
	console.log(req.files);

	new BbPromise((resolve, reject) => {
		fs.readFile('./mock-db.json', (err, data) => {
			if (err) reject(err);

			let olddata = JSON.parse(data);

			olddata.posts.push(req.body);

			fs.writeFile('./mock-db.json', JSON.stringify(olddata), 'utf8', (err) => {
				if (err) reject(err);
			});
		});
	});
});

app.post('/api/uploadimage', (req, res) => {
	console.log("Do I spy some dope files?");
	console.log(req.files.file);

	let file = req.files.file;

	fs.writeFile(__dirname + "/static/images/"+  file.name, file.data, 'binary', function(err) {
	    if(err) {
	        return console.log(err);
		}
	});
});

// ======================
// start the server		=
// ======================

var server = app.listen(port);

module.exports = server;