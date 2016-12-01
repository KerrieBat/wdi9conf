var express = require('express');
var bodyParser = require('body-parser');

// Configure app
var app = express();
app.set('port', process.env.PORT || 8080);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: false }));

// Routes

// Start server
app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});
