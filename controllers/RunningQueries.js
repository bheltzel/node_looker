'use strict';

var url = require('url');


var RunningQueries = require('./RunningQueriesService');


module.exports.allRunningQueries = function allRunningQueries (req, res, next) {
  RunningQueries.allRunningQueries(req.swagger.params, res, next);
};

module.exports.killQuery = function killQuery (req, res, next) {
  RunningQueries.killQuery(req.swagger.params, res, next);
};
