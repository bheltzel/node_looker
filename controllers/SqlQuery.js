'use strict';

var url = require('url');


var SqlQuery = require('./SqlQueryService');


module.exports.createSqlQuery = function createSqlQuery (req, res, next) {
  SqlQuery.createSqlQuery(req.swagger.params, res, next);
};

module.exports.sqlQuery = function sqlQuery (req, res, next) {
  SqlQuery.sqlQuery(req.swagger.params, res, next);
};
