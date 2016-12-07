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
  console.log(registrant);
  db('users').where({
    email: registrant.email
  }).
  then(function(user){
    if (user.length > 0){
      if (password.isPasswordValid(req.body.password, user[0].password)){
        //The user has already registered with this password, so just log them in.
        res.render('loggedin', registrant);
      } else {
        console.log(user[0].password, registrant.password)
        registrant.error = "The email address has already been registered to another user."
        res.render('index', registrant);
      }
    } else {
      db.insert(registrant).into('users')
      .then(function(id){
        // console.log(id);
        res.render('loggedin', registrant);
      })
    }
  });
  // db.insert(registrant).into('users')
  // .then(function(id){
  //   // console.log(id);
  //   res.render('loggedin', registrant);
  // })
  // .finally(function(){
  // })
});

module.exports = router;
