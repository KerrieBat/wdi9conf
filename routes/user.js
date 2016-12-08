var express = require('express');
var db = require('../db.js');
var router = express.Router();

// GET /user
// Display dashboard
router.get('/', (req, res) => {
  if (req.session.user) {
    var email = req.session.user.split('#%')[0];
    db('users').where({
      email: email
    })
    .then(user => {
      res.render('loggedin', user[0]);
    });
  }
  else {
    res.redirect('/');
  }
});

module.exports = router;
