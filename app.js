const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send('Welcome to our website!')
})


app.listen(3000);