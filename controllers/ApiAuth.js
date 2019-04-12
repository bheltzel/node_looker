'use strict';

var url = require('url');


var ApiAuth = require('./ApiAuthService');


module.exports.login = function login (req, res, next) {
  ApiAuth.login(req.swagger.params, res, next);
};

module.exports.loginUser = function loginUser (req, res, next) {
  ApiAuth.loginUser(req.swagger.params, res, next);
};

module.exports.logout = function logout (req, res, next) {
  ApiAuth.logout(req.swagger.params, res, next);
};
