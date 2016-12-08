var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');
var session = require('express-session') //This module allows the server to remember users via cookies
var KnexSessionStore = require('connect-session-knex')(session);
var store = new KnexSessionStore({
  knex: db,
  tablename: 'wdiconf_sessions',
  createtable: true
});//This allows the database to track said users.
var ticketRoutes = require('./routes/ticket');
var loginRoutes = require('./routes/login');

// Configure app

app.set('port', process.env.PORT || 8080);

// Middleware to parse post data and attach it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: false }));
app.use(session({
  secret: 'Harry loves PHP',
  cookie: { maxAge: 3600000 },
  store: store
}))
app.use(express.static('client'))

// Set default template to be pug.
app.set('views', './views');
app.set('view engine', 'pug');

// Routes
app.get('/', function(req, res) {
  console.log(req.session)
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
