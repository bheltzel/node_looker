'use strict';

var url = require('url');


var Auth = require('./AuthService');


module.exports.createOidcTestConfig = function createOidcTestConfig (req, res, next) {
  Auth.createOidcTestConfig(req.swagger.params, res, next);
};

module.exports.createSamlTestConfig = function createSamlTestConfig (req, res, next) {
  Auth.createSamlTestConfig(req.swagger.params, res, next);
};

module.exports.deleteOidcTestConfig = function deleteOidcTestConfig (req, res, next) {
  Auth.deleteOidcTestConfig(req.swagger.params, res, next);
};

module.exports.deleteSamlTestConfig = function deleteSamlTestConfig (req, res, next) {
  Auth.deleteSamlTestConfig(req.swagger.params, res, next);
};

module.exports.fetchAndParseSamlIdpMetadata = function fetchAndParseSamlIdpMetadata (req, res, next) {
  Auth.fetchAndParseSamlIdpMetadata(req.swagger.params, res, next);
};

module.exports.ldapConfig = function ldapConfig (req, res, next) {
  Auth.ldapConfig(req.swagger.params, res, next);
};

module.exports.oidcConfig = function oidcConfig (req, res, next) {
  Auth.oidcConfig(req.swagger.params, res, next);
};

module.exports.oidcTestConfig = function oidcTestConfig (req, res, next) {
  Auth.oidcTestConfig(req.swagger.params, res, next);
};

module.exports.parseSamlIdpMetadata = function parseSamlIdpMetadata (req, res, next) {
  Auth.parseSamlIdpMetadata(req.swagger.params, res, next);
};

module.exports.samlConfig = function samlConfig (req, res, next) {
  Auth.samlConfig(req.swagger.params, res, next);
};

module.exports.samlTestConfig = function samlTestConfig (req, res, next) {
  Auth.samlTestConfig(req.swagger.params, res, next);
};

module.exports.testLdapConfigAuth = function testLdapConfigAuth (req, res, next) {
  Auth.testLdapConfigAuth(req.swagger.params, res, next);
};

module.exports.testLdapConfigConnection = function testLdapConfigConnection (req, res, next) {
  Auth.testLdapConfigConnection(req.swagger.params, res, next);
};

module.exports.testLdapConfigUserAuth = function testLdapConfigUserAuth (req, res, next) {
  Auth.testLdapConfigUserAuth(req.swagger.params, res, next);
};

module.exports.testLdapConfigUserInfo = function testLdapConfigUserInfo (req, res, next) {
  Auth.testLdapConfigUserInfo(req.swagger.params, res, next);
};

module.exports.updateLdapConfig = function updateLdapConfig (req, res, next) {
  Auth.updateLdapConfig(req.swagger.params, res, next);
};

module.exports.updateOidcConfig = function updateOidcConfig (req, res, next) {
  Auth.updateOidcConfig(req.swagger.params, res, next);
};

module.exports.updateSamlConfig = function updateSamlConfig (req, res, next) {
  Auth.updateSamlConfig(req.swagger.params, res, next);
};
