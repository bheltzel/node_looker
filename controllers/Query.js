'use strict';

var url = require('url');


var Query = require('./QueryService');


module.exports.createQuery = function createQuery (req, res, next) {
  Query.createQuery(req.swagger.params, res, next);
};

module.exports.createQueryTask = function createQueryTask (req, res, next) {
  Query.createQueryTask(req.swagger.params, res, next);
};

module.exports.query = function query (req, res, next) {
  Query.query(req.swagger.params, res, next);
};

module.exports.queryForSlug = function queryForSlug (req, res, next) {
  Query.queryForSlug(req.swagger.params, res, next);
};

module.exports.queryTask = function queryTask (req, res, next) {
  Query.queryTask(req.swagger.params, res, next);
};

module.exports.queryTaskMultiResults = function queryTaskMultiResults (req, res, next) {
  Query.queryTaskMultiResults(req.swagger.params, res, next);
};

module.exports.queryTaskResults = function queryTaskResults (req, res, next) {
  Query.queryTaskResults(req.swagger.params, res, next);
};

module.exports.runInlineQuery = function runInlineQuery (req, res, next) {
  Query.runInlineQuery(req.swagger.params, res, next);
};

module.exports.runQuery = function runQuery (req, res, next) {
  Query.runQuery(req.swagger.params, res, next);
};

module.exports.runUrlEncodedQuery = function runUrlEncodedQuery (req, res, next) {
  Query.runUrlEncodedQuery(req.swagger.params, res, next);
};
