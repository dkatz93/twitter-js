const express = require('express');
const app = express();

// no one hears my hellos



app.use(function(req, res, next){
	console.log('This will show up everywhere');
	console.log(req.method, " / ", res.statusCode)
	next();	
})

app.use('/special/', function(req, res, next){
	console.log('This is special');
	next();	
})

app.get('/', function(req, res){
	res.send('Welcome to our website!')
})

app.get('/news', function(req, res){
	res.send('News!')
})

app.listen(3000);