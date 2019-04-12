'use strict';

var url = require('url');


var Connection = require('./ConnectionService');


module.exports.allConnections = function allConnections (req, res, next) {
  Connection.allConnections(req.swagger.params, res, next);
};

module.exports.allDialectInfos = function allDialectInfos (req, res, next) {
  Connection.allDialectInfos(req.swagger.params, res, next);
};

module.exports.connection = function connection (req, res, next) {
  Connection.connection(req.swagger.params, res, next);
};

module.exports.createConnection = function createConnection (req, res, next) {
  Connection.createConnection(req.swagger.params, res, next);
};

module.exports.deleteConnection = function deleteConnection (req, res, next) {
  Connection.deleteConnection(req.swagger.params, res, next);
};

module.exports.deleteConnectionOverride = function deleteConnectionOverride (req, res, next) {
  Connection.deleteConnectionOverride(req.swagger.params, res, next);
};

module.exports.testConnection = function testConnection (req, res, next) {
  Connection.testConnection(req.swagger.params, res, next);
};

module.exports.testConnectionConfig = function testConnectionConfig (req, res, next) {
  Connection.testConnectionConfig(req.swagger.params, res, next);
};

module.exports.updateConnection = function updateConnection (req, res, next) {
  Connection.updateConnection(req.swagger.params, res, next);
};
