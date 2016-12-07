var express = require('express');
var bodyParser = require('body-parser');
var ticketRoutes = require('./routes/ticket');
var loginRoutes = require('./routes/login');

// Configure app
var app = express();
var db = require('./db');

app.set('port', process.env.PORT || 8080);

// Middleware to parse post data and attach it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: false }));
app.use(express.static('client'))

// Set default template to be pug.
app.set('views', './views');
app.set('view engine', 'pug');

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

// API
var router = express.Router();
router.use('/register', ticketRoutes);
router.use('/login', loginRoutes);
app.use('/', router);


// Start server
app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});
