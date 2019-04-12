'use strict';

var url = require('url');


var Content = require('./ContentService');


module.exports.allContentMetadataAccesss = function allContentMetadataAccesss (req, res, next) {
  Content.allContentMetadataAccesss(req.swagger.params, res, next);
};

module.exports.allContentMetadatas = function allContentMetadatas (req, res, next) {
  Content.allContentMetadatas(req.swagger.params, res, next);
};

module.exports.contentFavorite = function contentFavorite (req, res, next) {
  Content.contentFavorite(req.swagger.params, res, next);
};

module.exports.contentMetadata = function contentMetadata (req, res, next) {
  Content.contentMetadata(req.swagger.params, res, next);
};

module.exports.createContentFavorite = function createContentFavorite (req, res, next) {
  Content.createContentFavorite(req.swagger.params, res, next);
};

module.exports.createContentMetadataAccess = function createContentMetadataAccess (req, res, next) {
  Content.createContentMetadataAccess(req.swagger.params, res, next);
};

module.exports.deleteContentFavorite = function deleteContentFavorite (req, res, next) {
  Content.deleteContentFavorite(req.swagger.params, res, next);
};

module.exports.deleteContentMetadataAccess = function deleteContentMetadataAccess (req, res, next) {
  Content.deleteContentMetadataAccess(req.swagger.params, res, next);
};

module.exports.searchContentFavorites = function searchContentFavorites (req, res, next) {
  Content.searchContentFavorites(req.swagger.params, res, next);
};

module.exports.searchContentViews = function searchContentViews (req, res, next) {
  Content.searchContentViews(req.swagger.params, res, next);
};

module.exports.updateContentMetadata = function updateContentMetadata (req, res, next) {
  Content.updateContentMetadata(req.swagger.params, res, next);
};

module.exports.updateContentMetadataAccess = function updateContentMetadataAccess (req, res, next) {
  Content.updateContentMetadataAccess(req.swagger.params, res, next);
};
