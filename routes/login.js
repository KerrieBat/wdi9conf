// Routes for registration / ticketing part
var express = require('express');

var router = express.Router();
var db = require('../db.js');
var password = require('./password');

router.post('/', (req, res) => {
  console.log(req.session)
  var registrant = {
    email: req.body.email
  }
  db('users').where({
    email: registrant.email
  }).
  then(function(user){
    if (user.length > 0){
      if (password.isPasswordValid(req.body.password, user[0].password)){
        //The user has already registered with this password, so log them in and save to the cookie.
        req.session.user = user[0].email + "#%" + password.generateHash(user[0].email);
        res.redirect('/user');
      } else {
        console.log(user[0].password, registrant.password)
        registrant.login_error = "Please check your password for typos and try again."
        res.render('index', registrant);
      }
    } else {
      registrant.login_error = "Please check your email address for typos and try again."
      res.render('index', registrant);
    }
  });
});

module.exports = router;
