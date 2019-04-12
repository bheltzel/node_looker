'use strict';

var url = require('url');


var Session = require('./SessionService');


module.exports.session = function session (req, res, next) {
  Session.session(req.swagger.params, res, next);
};

module.exports.updateSession = function updateSession (req, res, next) {
  Session.updateSession(req.swagger.params, res, next);
};
