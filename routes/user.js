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
    .then(results => {
      var data = {
        user: null,
        mentors: null,
        mentees: null
      };
      data.user = results[0];

      // Find potential mentors for current user
      db('users').where({
        mentoring: data.user.learning
      })
      .andWhereNot({
        id: data.user.id
      })
      // Find potential mentees for current user
      .then((mentors) => {
        data.mentors = mentors;
        return db('users').where({
          learning: data.user.mentoring
        })
        .andWhereNot({
          id: data.user.id
        });
      })
      // Render dashboard
      .then((mentees) => {
        data.mentees = mentees;
        res.render('loggedin', data);
      });
    });
  }
  else {
    res.redirect('/');
  }
});

module.exports = router;
