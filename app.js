require('dotenv').config();
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//import routes
var indexRouter = require('./routes/index');
var crisisRouter = require('./routes/crisis');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors()); // to get requests from users, and be able to send the response.
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // for static files, such as css, javascript...

app.use('/', indexRouter);
app.use('/', crisisRouter);


module.exports = app;
