'use strict';

/*
 "scripts": {
    "start": "cross-env NODE_ENV=development nodemon server.js",
    "test": "cross-env NODE_ENV=test babel-tape-runner test/test-*.js",
    "pretest": "eslint .",
    "prod": "pm2-runtime start ecosystem.config.js --env production"
  },
 */

/**
 * Module dependencies
 */

require('dotenv').config();

const fs = require('fs');
const path = require('path')
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config');

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 3000;

const app = express();
const connection = connect();

/**
 * Expose
 */

module.exports = {
  app,
  connection
};
app.use(express.static(path.join(__dirname, 'client/build')));
if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, 'client/build')));  
}
// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.indexOf('.js'))
  .forEach(file => require(join(models, file)));

// Bootstrap routes
require('./config/passport')(passport);
require('./config/express')(app, passport);
require('./config/routes')(app, passport);

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect() {
  var options = { keepAlive: 1, useNewUrlParser: true };
  mongoose.connect(config.db, options);
  return mongoose.connection;
}
