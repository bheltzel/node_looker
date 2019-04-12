'use strict';

var url = require('url');


var Integration = require('./IntegrationService');


module.exports.acceptIntegrationHubLegalAgreement = function acceptIntegrationHubLegalAgreement (req, res, next) {
  Integration.acceptIntegrationHubLegalAgreement(req.swagger.params, res, next);
};

module.exports.allIntegrationHubs = function allIntegrationHubs (req, res, next) {
  Integration.allIntegrationHubs(req.swagger.params, res, next);
};

module.exports.allIntegrations = function allIntegrations (req, res, next) {
  Integration.allIntegrations(req.swagger.params, res, next);
};

module.exports.createIntegrationHub = function createIntegrationHub (req, res, next) {
  Integration.createIntegrationHub(req.swagger.params, res, next);
};

module.exports.deleteIntegrationHub = function deleteIntegrationHub (req, res, next) {
  Integration.deleteIntegrationHub(req.swagger.params, res, next);
};

module.exports.fetchIntegrationForm = function fetchIntegrationForm (req, res, next) {
  Integration.fetchIntegrationForm(req.swagger.params, res, next);
};

module.exports.integration = function integration (req, res, next) {
  Integration.integration(req.swagger.params, res, next);
};

module.exports.integrationHub = function integrationHub (req, res, next) {
  Integration.integrationHub(req.swagger.params, res, next);
};

module.exports.testIntegration = function testIntegration (req, res, next) {
  Integration.testIntegration(req.swagger.params, res, next);
};

module.exports.updateIntegration = function updateIntegration (req, res, next) {
  Integration.updateIntegration(req.swagger.params, res, next);
};

module.exports.updateIntegrationHub = function updateIntegrationHub (req, res, next) {
  Integration.updateIntegrationHub(req.swagger.params, res, next);
};
