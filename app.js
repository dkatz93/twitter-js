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

