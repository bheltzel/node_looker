'use strict';

var url = require('url');


var Role = require('./RoleService');


module.exports.allModelSets = function allModelSets (req, res, next) {
  Role.allModelSets(req.swagger.params, res, next);
};

module.exports.allPermissionSets = function allPermissionSets (req, res, next) {
  Role.allPermissionSets(req.swagger.params, res, next);
};

module.exports.allPermissions = function allPermissions (req, res, next) {
  Role.allPermissions(req.swagger.params, res, next);
};

module.exports.allRoles = function allRoles (req, res, next) {
  Role.allRoles(req.swagger.params, res, next);
};

module.exports.createModelSet = function createModelSet (req, res, next) {
  Role.createModelSet(req.swagger.params, res, next);
};

module.exports.createPermissionSet = function createPermissionSet (req, res, next) {
  Role.createPermissionSet(req.swagger.params, res, next);
};

module.exports.createRole = function createRole (req, res, next) {
  Role.createRole(req.swagger.params, res, next);
};

module.exports.deleteModelSet = function deleteModelSet (req, res, next) {
  Role.deleteModelSet(req.swagger.params, res, next);
};

module.exports.deletePermissionSet = function deletePermissionSet (req, res, next) {
  Role.deletePermissionSet(req.swagger.params, res, next);
};

module.exports.deleteRole = function deleteRole (req, res, next) {
  Role.deleteRole(req.swagger.params, res, next);
};

module.exports.modelSet = function modelSet (req, res, next) {
  Role.modelSet(req.swagger.params, res, next);
};

module.exports.permissionSet = function permissionSet (req, res, next) {
  Role.permissionSet(req.swagger.params, res, next);
};

module.exports.role = function role (req, res, next) {
  Role.role(req.swagger.params, res, next);
};

module.exports.roleGroups = function roleGroups (req, res, next) {
  Role.roleGroups(req.swagger.params, res, next);
};

module.exports.roleUsers = function roleUsers (req, res, next) {
  Role.roleUsers(req.swagger.params, res, next);
};

module.exports.setRoleGroups = function setRoleGroups (req, res, next) {
  Role.setRoleGroups(req.swagger.params, res, next);
};

module.exports.setRoleUsers = function setRoleUsers (req, res, next) {
  Role.setRoleUsers(req.swagger.params, res, next);
};

module.exports.updateModelSet = function updateModelSet (req, res, next) {
  Role.updateModelSet(req.swagger.params, res, next);
};

module.exports.updatePermissionSet = function updatePermissionSet (req, res, next) {
  Role.updatePermissionSet(req.swagger.params, res, next);
};

module.exports.updateRole = function updateRole (req, res, next) {
  Role.updateRole(req.swagger.params, res, next);
};
