'use strict';

var url = require('url');


var Homepage = require('./HomepageService');


module.exports.allHomepageItems = function allHomepageItems (req, res, next) {
  Homepage.allHomepageItems(req.swagger.params, res, next);
};

module.exports.allHomepageSections = function allHomepageSections (req, res, next) {
  Homepage.allHomepageSections(req.swagger.params, res, next);
};

module.exports.createHomepageItem = function createHomepageItem (req, res, next) {
  Homepage.createHomepageItem(req.swagger.params, res, next);
};

module.exports.createHomepageSection = function createHomepageSection (req, res, next) {
  Homepage.createHomepageSection(req.swagger.params, res, next);
};

module.exports.deleteHomepageItem = function deleteHomepageItem (req, res, next) {
  Homepage.deleteHomepageItem(req.swagger.params, res, next);
};

module.exports.deleteHomepageSection = function deleteHomepageSection (req, res, next) {
  Homepage.deleteHomepageSection(req.swagger.params, res, next);
};

module.exports.homepageItem = function homepageItem (req, res, next) {
  Homepage.homepageItem(req.swagger.params, res, next);
};

module.exports.homepageSection = function homepageSection (req, res, next) {
  Homepage.homepageSection(req.swagger.params, res, next);
};

module.exports.updateHomepageItem = function updateHomepageItem (req, res, next) {
  Homepage.updateHomepageItem(req.swagger.params, res, next);
};

module.exports.updateHomepageSection = function updateHomepageSection (req, res, next) {
  Homepage.updateHomepageSection(req.swagger.params, res, next);
};
