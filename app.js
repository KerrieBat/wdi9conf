var express = require('express');
var bodyParser = require('body-parser');
var ticketRoutes = require('./routes/ticket');

// Configure app
var app = express();
app.set('port', process.env.PORT || 8080);

// Middleware to parse post data and attach it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: false }));

// Set default template to be pug.
app.set('views', './views');
app.set('view engine', 'pug');

// Routes
app.get('/', function(req, res){

  res.render('index');
});

// API
var router = express.Router();
router.use('/tickets', ticketRoutes);
app.use('/api', router);


// Start server
app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});
