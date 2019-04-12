'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.allUserAccessFilters = function allUserAccessFilters (req, res, next) {
  User.allUserAccessFilters(req.swagger.params, res, next);
};

module.exports.allUserCredentialsApi3s = function allUserCredentialsApi3s (req, res, next) {
  User.allUserCredentialsApi3s(req.swagger.params, res, next);
};

module.exports.allUserCredentialsEmbeds = function allUserCredentialsEmbeds (req, res, next) {
  User.allUserCredentialsEmbeds(req.swagger.params, res, next);
};

module.exports.allUserSessions = function allUserSessions (req, res, next) {
  User.allUserSessions(req.swagger.params, res, next);
};

module.exports.allUsers = function allUsers (req, res, next) {
  User.allUsers(req.swagger.params, res, next);
};

module.exports.createUser = function createUser (req, res, next) {
  User.createUser(req.swagger.params, res, next);
};

module.exports.createUserAccessFilter = function createUserAccessFilter (req, res, next) {
  User.createUserAccessFilter(req.swagger.params, res, next);
};

module.exports.createUserCredentialsApi = function createUserCredentialsApi (req, res, next) {
  User.createUserCredentialsApi(req.swagger.params, res, next);
};

module.exports.createUserCredentialsApi3 = function createUserCredentialsApi3 (req, res, next) {
  User.createUserCredentialsApi3(req.swagger.params, res, next);
};

module.exports.createUserCredentialsEmail = function createUserCredentialsEmail (req, res, next) {
  User.createUserCredentialsEmail(req.swagger.params, res, next);
};

module.exports.createUserCredentialsEmailPasswordReset = function createUserCredentialsEmailPasswordReset (req, res, next) {
  User.createUserCredentialsEmailPasswordReset(req.swagger.params, res, next);
};

module.exports.createUserCredentialsTotp = function createUserCredentialsTotp (req, res, next) {
  User.createUserCredentialsTotp(req.swagger.params, res, next);
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  User.deleteUser(req.swagger.params, res, next);
};

module.exports.deleteUserAccessFilter = function deleteUserAccessFilter (req, res, next) {
  User.deleteUserAccessFilter(req.swagger.params, res, next);
};

module.exports.deleteUserAttributeUserValue = function deleteUserAttributeUserValue (req, res, next) {
  User.deleteUserAttributeUserValue(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsApi = function deleteUserCredentialsApi (req, res, next) {
  User.deleteUserCredentialsApi(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsApi3 = function deleteUserCredentialsApi3 (req, res, next) {
  User.deleteUserCredentialsApi3(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsEmail = function deleteUserCredentialsEmail (req, res, next) {
  User.deleteUserCredentialsEmail(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsEmbed = function deleteUserCredentialsEmbed (req, res, next) {
  User.deleteUserCredentialsEmbed(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsGoogle = function deleteUserCredentialsGoogle (req, res, next) {
  User.deleteUserCredentialsGoogle(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsLdap = function deleteUserCredentialsLdap (req, res, next) {
  User.deleteUserCredentialsLdap(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsLookerOpenid = function deleteUserCredentialsLookerOpenid (req, res, next) {
  User.deleteUserCredentialsLookerOpenid(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsOidc = function deleteUserCredentialsOidc (req, res, next) {
  User.deleteUserCredentialsOidc(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsSaml = function deleteUserCredentialsSaml (req, res, next) {
  User.deleteUserCredentialsSaml(req.swagger.params, res, next);
};

module.exports.deleteUserCredentialsTotp = function deleteUserCredentialsTotp (req, res, next) {
  User.deleteUserCredentialsTotp(req.swagger.params, res, next);
};

module.exports.deleteUserSession = function deleteUserSession (req, res, next) {
  User.deleteUserSession(req.swagger.params, res, next);
};

module.exports.me = function me (req, res, next) {
  User.me(req.swagger.params, res, next);
};

module.exports.searchUsers = function searchUsers (req, res, next) {
  User.searchUsers(req.swagger.params, res, next);
};

module.exports.searchUsersNames = function searchUsersNames (req, res, next) {
  User.searchUsersNames(req.swagger.params, res, next);
};

module.exports.setUserAttributeUserValue = function setUserAttributeUserValue (req, res, next) {
  User.setUserAttributeUserValue(req.swagger.params, res, next);
};

module.exports.setUserRoles = function setUserRoles (req, res, next) {
  User.setUserRoles(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser (req, res, next) {
  User.updateUser(req.swagger.params, res, next);
};

module.exports.updateUserAccessFilter = function updateUserAccessFilter (req, res, next) {
  User.updateUserAccessFilter(req.swagger.params, res, next);
};

module.exports.updateUserCredentialsEmail = function updateUserCredentialsEmail (req, res, next) {
  User.updateUserCredentialsEmail(req.swagger.params, res, next);
};

module.exports.user = function user (req, res, next) {
  User.user(req.swagger.params, res, next);
};

module.exports.userAccessFilter = function userAccessFilter (req, res, next) {
  User.userAccessFilter(req.swagger.params, res, next);
};

module.exports.userAttributeUserValues = function userAttributeUserValues (req, res, next) {
  User.userAttributeUserValues(req.swagger.params, res, next);
};

module.exports.userCredentialsApi = function userCredentialsApi (req, res, next) {
  User.userCredentialsApi(req.swagger.params, res, next);
};

module.exports.userCredentialsApi3 = function userCredentialsApi3 (req, res, next) {
  User.userCredentialsApi3(req.swagger.params, res, next);
};

module.exports.userCredentialsEmail = function userCredentialsEmail (req, res, next) {
  User.userCredentialsEmail(req.swagger.params, res, next);
};

module.exports.userCredentialsEmbed = function userCredentialsEmbed (req, res, next) {
  User.userCredentialsEmbed(req.swagger.params, res, next);
};

module.exports.userCredentialsGoogle = function userCredentialsGoogle (req, res, next) {
  User.userCredentialsGoogle(req.swagger.params, res, next);
};

module.exports.userCredentialsLdap = function userCredentialsLdap (req, res, next) {
  User.userCredentialsLdap(req.swagger.params, res, next);
};

module.exports.userCredentialsLookerOpenid = function userCredentialsLookerOpenid (req, res, next) {
  User.userCredentialsLookerOpenid(req.swagger.params, res, next);
};

module.exports.userCredentialsOidc = function userCredentialsOidc (req, res, next) {
  User.userCredentialsOidc(req.swagger.params, res, next);
};

module.exports.userCredentialsSaml = function userCredentialsSaml (req, res, next) {
  User.userCredentialsSaml(req.swagger.params, res, next);
};

module.exports.userCredentialsTotp = function userCredentialsTotp (req, res, next) {
  User.userCredentialsTotp(req.swagger.params, res, next);
};

module.exports.userForCredential = function userForCredential (req, res, next) {
  User.userForCredential(req.swagger.params, res, next);
};

module.exports.userRoles = function userRoles (req, res, next) {
  User.userRoles(req.swagger.params, res, next);
};

module.exports.userSession = function userSession (req, res, next) {
  User.userSession(req.swagger.params, res, next);
};
