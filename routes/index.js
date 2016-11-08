


const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function (req, res) {
  let twt = tweetBank.list();

  res.render( 'index', { tweets: twt, name: 'Nimit'});
});

module.exports = router;