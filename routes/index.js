var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res) {
  res.render('partials/login');
});
router.post('/login', function(req, res) {
  res.render('layouts/index');
});
router.get('/', function(req, res) {
  res.render('layouts/index');
});
module.exports = router;
