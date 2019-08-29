'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash')
var AdminRoutes = require('./allroutes').admin;
/**
 * Expose
 */

module.exports = function(app) {

  /**
   * Error handling
   */
  _.forEach(AdminRoutes,function (key,value) {
    app.use('/v2/admin'+value,key);
  });

  app.use(function(err, req, res, next) {
    // treat as 404
    if (
      err.message &&
      (~err.message.indexOf('not found') ||
        ~err.message.indexOf('Cast to ObjectId failed'))
    ) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function(req, res) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
