'use strict';

var url = require('url');


var ScheduledPlan = require('./ScheduledPlanService');


module.exports.allScheduledPlans = function allScheduledPlans (req, res, next) {
  ScheduledPlan.allScheduledPlans(req.swagger.params, res, next);
};

module.exports.createScheduledPlan = function createScheduledPlan (req, res, next) {
  ScheduledPlan.createScheduledPlan(req.swagger.params, res, next);
};

module.exports.deleteScheduledPlan = function deleteScheduledPlan (req, res, next) {
  ScheduledPlan.deleteScheduledPlan(req.swagger.params, res, next);
};

module.exports.scheduledPlan = function scheduledPlan (req, res, next) {
  ScheduledPlan.scheduledPlan(req.swagger.params, res, next);
};

module.exports.scheduledPlanRunOnce = function scheduledPlanRunOnce (req, res, next) {
  ScheduledPlan.scheduledPlanRunOnce(req.swagger.params, res, next);
};

module.exports.scheduledPlansForDashboard = function scheduledPlansForDashboard (req, res, next) {
  ScheduledPlan.scheduledPlansForDashboard(req.swagger.params, res, next);
};

module.exports.scheduledPlansForLook = function scheduledPlansForLook (req, res, next) {
  ScheduledPlan.scheduledPlansForLook(req.swagger.params, res, next);
};

module.exports.scheduledPlansForLookmlDashboard = function scheduledPlansForLookmlDashboard (req, res, next) {
  ScheduledPlan.scheduledPlansForLookmlDashboard(req.swagger.params, res, next);
};

module.exports.scheduledPlansForSpace = function scheduledPlansForSpace (req, res, next) {
  ScheduledPlan.scheduledPlansForSpace(req.swagger.params, res, next);
};

module.exports.updateScheduledPlan = function updateScheduledPlan (req, res, next) {
  ScheduledPlan.updateScheduledPlan(req.swagger.params, res, next);
};
