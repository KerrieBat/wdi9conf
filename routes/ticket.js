// Routes for registration / ticketing part
var express = require('express');
var db = require('../db.js');
var router = express.Router();

var password = require('./password');

router.post('/', (req, res) => {
  var registrant = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: password.generateHash(req.body.password)
  }
  db('users').where({
    email: registrant.email
  }).
  then(function(user){
    console.log(user)
    if (user.length > 0){
      if (password.isPasswordValid(req.body.password, user[0].password)){
        //The user has already registered with this password, so just log them in.
        req.session.user = user[0].email + "#%" + password.generateHash(user[0].email);
        res.redirect('/user');
      } else {
        registrant.error = "The email address has already been registered to another user."
        res.render('index', registrant);
      }
    } else {
      db.insert(registrant).into('users')
      .then(function(id){
        console.log(id)
        req.session.user = registrant[0].email + "#%" + password.generateHash(registrant[0].email);
        res.redirect('/user');
      })
    }
  });
});

function auth(req, res, next){
  if (req.session.user){
    var details = req.session.user.split("#%");
    if (password.isPasswordValid(details[0], details[1])){
      next();
    } else {
      res.render('index');
    }

  } else {
    res.render('index');
  }
}

router.post('/mentoring', auth, function(req, res){
  console.log("In the mentoring")
  // params.mentoring
  // params.learning
});

router.get('/talks', auth, function(req, res){
  console.log("in the talks")
  // params.sessionOne
  // params.sessionTwo
  // params.sessionThree
  // params.sessionFour
  // params.sessionFive
  // params.sessionSix
});

module.exports = router;
