/*!
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();

router
.get('/', function (req,res, next) {
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate'
  });
})
module.exports = router;
