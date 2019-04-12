'use strict';

var url = require('url');


var Space = require('./SpaceService');


module.exports.allSpaces = function allSpaces (req, res, next) {
  Space.allSpaces(req.swagger.params, res, next);
};

module.exports.createSpace = function createSpace (req, res, next) {
  Space.createSpace(req.swagger.params, res, next);
};

module.exports.deleteSpace = function deleteSpace (req, res, next) {
  Space.deleteSpace(req.swagger.params, res, next);
};

module.exports.searchSpaces = function searchSpaces (req, res, next) {
  Space.searchSpaces(req.swagger.params, res, next);
};

module.exports.space = function space (req, res, next) {
  Space.space(req.swagger.params, res, next);
};

module.exports.spaceAncestors = function spaceAncestors (req, res, next) {
  Space.spaceAncestors(req.swagger.params, res, next);
};

module.exports.spaceChildren = function spaceChildren (req, res, next) {
  Space.spaceChildren(req.swagger.params, res, next);
};

module.exports.spaceChildrenSearch = function spaceChildrenSearch (req, res, next) {
  Space.spaceChildrenSearch(req.swagger.params, res, next);
};

module.exports.spaceDashboards = function spaceDashboards (req, res, next) {
  Space.spaceDashboards(req.swagger.params, res, next);
};

module.exports.spaceLooks = function spaceLooks (req, res, next) {
  Space.spaceLooks(req.swagger.params, res, next);
};

module.exports.spaceParent = function spaceParent (req, res, next) {
  Space.spaceParent(req.swagger.params, res, next);
};

module.exports.updateSpace = function updateSpace (req, res, next) {
  Space.updateSpace(req.swagger.params, res, next);
};
