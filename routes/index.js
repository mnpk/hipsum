var express = require('express');
var router = express.Router();
var lorem = require('../lorem');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lorem.json/', function(req, res, next) {
  var p = req.query.p;
  if (p === undefined) {
    p = 3;
  }
  var l = req.query.l;
  if (l === undefined) {
    l = 60;
  }
  res.json(lorem.lorem_json(p, l));
});

router.get('/lorem.txt/', function(req, res, next) {
  var p = req.query.p;
  if (p === undefined) {
    p = 3;
  }
  var l = req.query.l;
  if (l === undefined) {
    l = 60;
  }

  res.type('text/plain');
  res.send(lorem.lorem(p, l));
});

module.exports = router;
