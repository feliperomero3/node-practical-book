var express = require('express');
var router = express.Router();
var debug = require('debug')('expressapp:server');

/* GET home page. */
router.get('/', function(req, res, next) {
  debug('Index hit');
  res.render('index', { title: 'Express' });
});

module.exports = router;
