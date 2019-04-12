'use strict';

var url = require('url');


var DataAction = require('./DataActionService');


module.exports.fetchRemoteDataActionForm = function fetchRemoteDataActionForm (req, res, next) {
  DataAction.fetchRemoteDataActionForm(req.swagger.params, res, next);
};

module.exports.performDataAction = function performDataAction (req, res, next) {
  DataAction.performDataAction(req.swagger.params, res, next);
};
