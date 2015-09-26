//server.js

// set up ======================================
var express = require('express);
var app = espress(); 					//create our app w/express
var mongoose = require('mongoose'); 	//mongoose for mongodb
var morgan require('morgan');			//log requrests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override');  // simulate DELETE and PUT (express4)

// configuration ===============================

mongoose.connect('mongodb://todouser:mongolab@ds051873.mongolab.com:51873/meantodolistdb);  //connect to mongoDB database on modulus.io