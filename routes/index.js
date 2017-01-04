var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //alert("You have clicked here");
  //console.log("You have clicked here");
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
