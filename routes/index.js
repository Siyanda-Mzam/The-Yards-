var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('partials/login');
});
router.post('/', function(req, res) {
  res.redirect('/home');
});
router.get('/home', function(req, res) {
  res.render('partials/navbar');
});
router.get('/logout', function(req, res) {
  res.redirect('/');
});
router.get('/applications', function(req, res) {
  res.render('partials/app-form');
});
module.exports = router;
