'use strict';

var url = require('url');


var Look = require('./LookService');


module.exports.allLooks = function allLooks (req, res, next) {
  Look.allLooks(req.swagger.params, res, next);
};

module.exports.createLook = function createLook (req, res, next) {
  Look.createLook(req.swagger.params, res, next);
};

module.exports.deleteLook = function deleteLook (req, res, next) {
  Look.deleteLook(req.swagger.params, res, next);
};

module.exports.look = function look (req, res, next) {
  Look.look(req.swagger.params, res, next);
};

module.exports.runLook = function runLook (req, res, next) {
  Look.runLook(req.swagger.params, res, next);
};

module.exports.searchLooks = function searchLooks (req, res, next) {
  Look.searchLooks(req.swagger.params, res, next);
};

module.exports.updateLook = function updateLook (req, res, next) {
  Look.updateLook(req.swagger.params, res, next);
};
