'use strict';

var url = require('url');


var RenderTask = require('./RenderTaskService');


module.exports.createDashboardRenderTask = function createDashboardRenderTask (req, res, next) {
  RenderTask.createDashboardRenderTask(req.swagger.params, res, next);
};

module.exports.createLookRenderTask = function createLookRenderTask (req, res, next) {
  RenderTask.createLookRenderTask(req.swagger.params, res, next);
};

module.exports.createLookmlDashboardRenderTask = function createLookmlDashboardRenderTask (req, res, next) {
  RenderTask.createLookmlDashboardRenderTask(req.swagger.params, res, next);
};

module.exports.createQueryRenderTask = function createQueryRenderTask (req, res, next) {
  RenderTask.createQueryRenderTask(req.swagger.params, res, next);
};

module.exports.renderTask = function renderTask (req, res, next) {
  RenderTask.renderTask(req.swagger.params, res, next);
};

module.exports.renderTaskResults = function renderTaskResults (req, res, next) {
  RenderTask.renderTaskResults(req.swagger.params, res, next);
};
