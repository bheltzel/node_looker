'use strict';

var url = require('url');


var Dashboard = require('./DashboardService');


module.exports.allDashboards = function allDashboards (req, res, next) {
  Dashboard.allDashboards(req.swagger.params, res, next);
};

module.exports.createDashboard = function createDashboard (req, res, next) {
  Dashboard.createDashboard(req.swagger.params, res, next);
};

module.exports.createDashboardPrefetch = function createDashboardPrefetch (req, res, next) {
  Dashboard.createDashboardPrefetch(req.swagger.params, res, next);
};

module.exports.dashboard = function dashboard (req, res, next) {
  Dashboard.dashboard(req.swagger.params, res, next);
};

module.exports.dashboardPrefetch = function dashboardPrefetch (req, res, next) {
  Dashboard.dashboardPrefetch(req.swagger.params, res, next);
};

module.exports.deleteDashboard = function deleteDashboard (req, res, next) {
  Dashboard.deleteDashboard(req.swagger.params, res, next);
};

module.exports.importLookmlDashboard = function importLookmlDashboard (req, res, next) {
  Dashboard.importLookmlDashboard(req.swagger.params, res, next);
};

module.exports.searchDashboards = function searchDashboards (req, res, next) {
  Dashboard.searchDashboards(req.swagger.params, res, next);
};

module.exports.syncLookmlDashboard = function syncLookmlDashboard (req, res, next) {
  Dashboard.syncLookmlDashboard(req.swagger.params, res, next);
};

module.exports.updateDashboard = function updateDashboard (req, res, next) {
  Dashboard.updateDashboard(req.swagger.params, res, next);
};
