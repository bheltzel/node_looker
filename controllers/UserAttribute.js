'use strict';

var url = require('url');


var UserAttribute = require('./UserAttributeService');


module.exports.allUserAttributeGroupValues = function allUserAttributeGroupValues (req, res, next) {
  UserAttribute.allUserAttributeGroupValues(req.swagger.params, res, next);
};

module.exports.allUserAttributes = function allUserAttributes (req, res, next) {
  UserAttribute.allUserAttributes(req.swagger.params, res, next);
};

module.exports.createUserAttribute = function createUserAttribute (req, res, next) {
  UserAttribute.createUserAttribute(req.swagger.params, res, next);
};

module.exports.deleteUserAttribute = function deleteUserAttribute (req, res, next) {
  UserAttribute.deleteUserAttribute(req.swagger.params, res, next);
};

module.exports.setUserAttributeGroupValues = function setUserAttributeGroupValues (req, res, next) {
  UserAttribute.setUserAttributeGroupValues(req.swagger.params, res, next);
};

module.exports.updateUserAttribute = function updateUserAttribute (req, res, next) {
  UserAttribute.updateUserAttribute(req.swagger.params, res, next);
};

module.exports.userAttribute = function userAttribute (req, res, next) {
  UserAttribute.userAttribute(req.swagger.params, res, next);
};
