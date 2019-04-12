'use strict';

var url = require('url');


var Workspace = require('./WorkspaceService');


module.exports.allWorkspaces = function allWorkspaces (req, res, next) {
  Workspace.allWorkspaces(req.swagger.params, res, next);
};

module.exports.workspace = function workspace (req, res, next) {
  Workspace.workspace(req.swagger.params, res, next);
};
