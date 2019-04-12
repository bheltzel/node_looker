'use strict';

var url = require('url');


var Config = require('./ConfigService');


module.exports.allLegacyFeatures = function allLegacyFeatures (req, res, next) {
  Config.allLegacyFeatures(req.swagger.params, res, next);
};

module.exports.allTimezones = function allTimezones (req, res, next) {
  Config.allTimezones(req.swagger.params, res, next);
};

module.exports.backupConfiguration = function backupConfiguration (req, res, next) {
  Config.backupConfiguration(req.swagger.params, res, next);
};

module.exports.legacyFeature = function legacyFeature (req, res, next) {
  Config.legacyFeature(req.swagger.params, res, next);
};

module.exports.updateBackupConfiguration = function updateBackupConfiguration (req, res, next) {
  Config.updateBackupConfiguration(req.swagger.params, res, next);
};

module.exports.updateLegacyFeature = function updateLegacyFeature (req, res, next) {
  Config.updateLegacyFeature(req.swagger.params, res, next);
};

module.exports.updateWhitelabelConfiguration = function updateWhitelabelConfiguration (req, res, next) {
  Config.updateWhitelabelConfiguration(req.swagger.params, res, next);
};

module.exports.versions = function versions (req, res, next) {
  Config.versions(req.swagger.params, res, next);
};

module.exports.whitelabelConfiguration = function whitelabelConfiguration (req, res, next) {
  Config.whitelabelConfiguration(req.swagger.params, res, next);
};
