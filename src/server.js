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

// import some new stuff
import React from 'react';
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { StaticRouter, RouterContext } from 'react-router';
import routes from '../client/components/routes';

import { matchPath } from 'react-router-dom'

import ReactDOMServer from 'react-dom/server';

import AppServer from '../client/components/AppServer';

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

	if(file){
		let filename = file.name.replace(/(?!\.jpg)(?!\.png)(?!\.gif)[^a-z,0-9]+/gi, '');

		if (filename.length < 4){
			res.send("Invalid filename.");
			return console.log("Invalid filename. Length < 4 when non-alphanumerics replaced. (no filename or just extension)");
		}
		else{
			if(file.mimetype === "image/png" || "image/jpeg" || "image/gif"){

				fs.writeFile(__dirname + "/static/images/"+  filename, file.data, 'binary', function(err) {
				    if(err) {
				        return console.log(err);
					}
					else{
						res.send("/images/"+  filename);
					}
				});
			}
			else{
				res.send("Invalid file. Is it a JPG/PNG/GIF image?");
			}
		}
	}
	else{
		res.send("Error: invalid file.");
	}
});

// ======================
// route it all to HTML	=
// ======================

app.get('*', (req, res) => {
	const context = {}

	// inside a request
	const promises = [];
	// use `some` to imitate `<Switch>` behavior of selecting only
	// the first to match	

	const html = ReactDOMServer.renderToString(
		<StaticRouter
			location={req.url}
			context={context}>
			<AppServer/>
		</StaticRouter>
	);

	if (context.url) {
		res.writeHead(301, {
			Location: context.url
		});
		res.end()
	} 
	else{
		res.write(`
			<!doctype html>
			<div id="app">${html}</div>
			`);
		res.end()
	}
});

function renderPage(appHtml) {
  return `
    <html>
	    <head>
	        <title>Blogsys</title>
	        
	        <link rel="stylesheet" type="text/css" href="./css/bulma.min.css">
	        <link rel="stylesheet" type="text/css" href="./css/pushy.css">

	        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
	        <link rel="stylesheet" type="text/css" href="./css/font-awesome.min.css">

	        <link rel="stylesheet" type="text/css" href="./css/styles.css">
	    </head>
	    <body>
	        <div id="root">${appHtml}</div>
	        <script src="bundle.js"></script>
	    </body>
	</html>
   `
}

// ======================
// start the server		=
// ======================

var server = app.listen(port);

module.exports = server;