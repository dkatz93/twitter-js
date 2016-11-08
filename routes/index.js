const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
// 
router.use(express.static('public'));

// router.get('stylesheets/style.css', function(req, res){
// 	res.sendFile(s'./public/stylesheets/style.css')
// })

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;