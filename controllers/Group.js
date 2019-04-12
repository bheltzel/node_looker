'use strict';

var url = require('url');


var Group = require('./GroupService');


module.exports.addGroupGroup = function addGroupGroup (req, res, next) {
  Group.addGroupGroup(req.swagger.params, res, next);
};

module.exports.addGroupUser = function addGroupUser (req, res, next) {
  Group.addGroupUser(req.swagger.params, res, next);
};

module.exports.allGroupGroups = function allGroupGroups (req, res, next) {
  Group.allGroupGroups(req.swagger.params, res, next);
};

module.exports.allGroupUsers = function allGroupUsers (req, res, next) {
  Group.allGroupUsers(req.swagger.params, res, next);
};

module.exports.allGroups = function allGroups (req, res, next) {
  Group.allGroups(req.swagger.params, res, next);
};

module.exports.createGroup = function createGroup (req, res, next) {
  Group.createGroup(req.swagger.params, res, next);
};

module.exports.deleteGroup = function deleteGroup (req, res, next) {
  Group.deleteGroup(req.swagger.params, res, next);
};

module.exports.deleteGroupFromGroup = function deleteGroupFromGroup (req, res, next) {
  Group.deleteGroupFromGroup(req.swagger.params, res, next);
};

module.exports.deleteGroupUser = function deleteGroupUser (req, res, next) {
  Group.deleteGroupUser(req.swagger.params, res, next);
};

module.exports.deleteUserAttributeGroupValue = function deleteUserAttributeGroupValue (req, res, next) {
  Group.deleteUserAttributeGroupValue(req.swagger.params, res, next);
};

module.exports.group = function group (req, res, next) {
  Group.group(req.swagger.params, res, next);
};

module.exports.updateGroup = function updateGroup (req, res, next) {
  Group.updateGroup(req.swagger.params, res, next);
};

module.exports.updateUserAttributeGroupValue = function updateUserAttributeGroupValue (req, res, next) {
  Group.updateUserAttributeGroupValue(req.swagger.params, res, next);
};
