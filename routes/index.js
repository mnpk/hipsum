var express = require('express');
var router = express.Router();
var lorem = require('../lorem');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '한글 로렘 입숨' });
});

router.get('/about/', function(req, res) {
  res.render('about', { title: 'About' });
});

router.get('/api-guide/', function(req, res) {
  res.render('api-guide', { title: 'API Guide' });
});

router.get('/api/lorem/', function(req, res, next) {
  var p = req.query.p;
  if (p === undefined) {
    p = 2;
  }
  var l = req.query.l;
  if (l === undefined) {
    l = 20;
  }
  res.json(lorem.lorem_json(p, l, req.query.c));
});

router.get('/api/lorem.txt/', function(req, res, next) {
  var p = req.query.p;
  if (p === undefined) {
    p = 2;
  }
  var l = req.query.l;
  if (l === undefined) {
    l = 20;
  }
  res.type('text/plain');
  res.send(lorem.lorem(p, l, req.query.c));
});

module.exports = router;
