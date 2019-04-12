'use strict';

var url = require('url');


var LookmlModel = require('./LookmlModelService');


module.exports.allLookmlModels = function allLookmlModels (req, res, next) {
  LookmlModel.allLookmlModels(req.swagger.params, res, next);
};

module.exports.createLookmlModel = function createLookmlModel (req, res, next) {
  LookmlModel.createLookmlModel(req.swagger.params, res, next);
};

module.exports.deleteLookmlModel = function deleteLookmlModel (req, res, next) {
  LookmlModel.deleteLookmlModel(req.swagger.params, res, next);
};

module.exports.lookmlModel = function lookmlModel (req, res, next) {
  LookmlModel.lookmlModel(req.swagger.params, res, next);
};

module.exports.lookmlModelExplore = function lookmlModelExplore (req, res, next) {
  LookmlModel.lookmlModelExplore(req.swagger.params, res, next);
};

module.exports.updateLookmlModel = function updateLookmlModel (req, res, next) {
  LookmlModel.updateLookmlModel(req.swagger.params, res, next);
};
