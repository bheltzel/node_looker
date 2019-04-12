'use strict';

var url = require('url');


var Datagroup = require('./DatagroupService');


module.exports.allDatagroups = function allDatagroups (req, res, next) {
  Datagroup.allDatagroups(req.swagger.params, res, next);
};

module.exports.datagroup = function datagroup (req, res, next) {
  Datagroup.datagroup(req.swagger.params, res, next);
};

module.exports.updateDatagroup = function updateDatagroup (req, res, next) {
  Datagroup.updateDatagroup(req.swagger.params, res, next);
};
