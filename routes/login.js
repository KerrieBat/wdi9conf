// Routes for registration / ticketing part
var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('loggedin');
});

module.exports = router;
