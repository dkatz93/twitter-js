const express = require('express');
const nunjucks = require('nunjucks');
const tweets = require('./tweetBank');

const app = express();



app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates


app.listen(3000);

const routes = require('./routes/index.js');
app.use('/', routes)

// app.use(function(req, res, next){
// 	console.log('This will show up everywhere');
// 	console.log(req.method, " / ", res.statusCode)
// 	next();	
// })

// app.use('/special/', function(req, res, next){
// 	console.log('This is special');
// 	next();	
// })

// app.get('/', function(req, res){
// 	var locals = {
// 	    title: 'An Example',
// 	    people: [
// 	        { name: 'Gandalf'},
// 	        { name: 'Frodo' },
// 	        { name: 'Hermione'},
// 	       	{ name: 'Kelly' },
// 	        { name: 'James'}
//     	]
// 	};
// 	res.render('index', locals)
// 	//res.send('Welcome to our website!')
// })

// app.get('/news', function(req, res){
// 	res.send('News!')
// })

