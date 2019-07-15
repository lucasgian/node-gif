var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET connection db test. */
router.get('/db', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
