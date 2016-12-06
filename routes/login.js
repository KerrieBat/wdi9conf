// Routes for registration / ticketing part
var express = require('express');

var router = express.Router();

router.post('/', (req, res) => {
  res.render('loggedin');
});

module.exports = router;
